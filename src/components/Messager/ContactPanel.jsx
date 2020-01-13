/* eslint-disable default-case */
import React, { Component } from 'react'
import "./chat.scss";
//Libarys
import { connect } from 'react-redux'
//Actions 
import { getUsers, addFriend, removeFriend } from '../../API/messagerPanel'
//Components//
import UserRowIcon from '../ComponentsSimple/UserRowIcon'
import FriendRowIcon from '../ComponentsSimple/FriendRowIcon'
//MaterialUI
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';

import ChatWebSocket from '../../API/WebSocket/Chat'


const Search = styled(TextField)({
    width: '23vw',
    margin: '.8rem'
});

const Navigation = styled(BottomNavigation)({
    width: '90%',
    textAlign: 'center',
    margin: ' auto',

});

let subscribe
let webSocket
let subscriptionName = "general"

class RegistrationForm extends Component {


    componentDidMount() {
        if (!webSocket) {
            webSocket = ChatWebSocket
            webSocket.connection()
            this.props.setPanelMode("friends")
            this.makeSubscription()
        }
    }

    makeSubscription() {
        webSocket.chanalTopic = subscriptionName
        subscribe = webSocket.subscribe()
        this.props.setWebSocket(subscribe)
    }


    removeFriend = (id, friendName) => {
        removeFriend(id)
        let notificParams = { friendName }
        notificParams.event = "REMOVE_FRIEND"
        this.props.notification(notificParams)
    }

    addFriend = (id, friendName) => {
        addFriend(id)
        let notificParams = { friendName }
        notificParams.event = "ADD_FRIEND"
        this.props.notification(notificParams)
    }

    privateDialog = (collocutor) => {
        //ws chanal name calculate: minID + "/" + maxID
        const chanel = collocutor.id < this.props.userID ?
            `${collocutor.id}and${this.props.userID}` :
            `${this.props.userID}and${collocutor.id}`
        if (chanel !== subscriptionName) {
            this.props.setChat(collocutor)
            subscriptionName = chanel
            webSocket.ws.removeSubscription(subscribe)
            this.makeSubscription()
        }
    }




    constructorUsersColumn(users, mode) {
        if (users) {
            switch (mode) {
                case "friends":
                    return users.map(user =>
                        <FriendRowIcon key={`${user.id}`}
                            removeFriend={(id) => this.removeFriend(id, user.name)}
                            user={user}
                            privateDialog={() => this.privateDialog(user)}
                        />)
                case "all":
                    return users.map(user =>
                        <UserRowIcon key={`${user.id}`}
                            user={user}
                            addFriend={(id) => this.addFriend(id, user.name)}
                            privateDialog={() => this.privateDialog(user)}
                        />)
            }
        } else {
            return (<h3>Загрузка</h3>)
        }
    }

    render() {
        return (
            <div className="contactPanel">
                <div>
                    <Navigation value={this.props.panelMode}
                        onChange={(event, newValue) => {
                            this.props.setPanelMode(newValue)
                        }}>
                        <BottomNavigationAction label="Друзья" value="friends" icon={<EmojiPeopleTwoToneIcon />} />
                        <BottomNavigationAction label="Поиск" value="all" icon={<SearchIcon />} />
                    </Navigation>
                    <div className="textField"></div>
                    <div className="searchResult">
                        {this.constructorUsersColumn(this.props.contacts, this.props.panelMode)}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        userName: state.user.userName,
        panelMode: state.messager.barMode,
        contacts: state.messager.users,
        ws: state.webSocket.ws,
        userID: state.user.id
    }),
    dispatch => ({
        setPanelMode: (modeName) => dispatch(getUsers(modeName)),
        notification: (notificParams) => dispatch({ type: "PUSH_NOTIFICATION_ADD", notificParams }),
        setChat: (collocutor) => dispatch({ type: "SET_CHAT", collocutor }),
        setWebSocket: (subscribe) => dispatch({ type: "SET_WEBSOCKET", subscribe })
    })
)(RegistrationForm);