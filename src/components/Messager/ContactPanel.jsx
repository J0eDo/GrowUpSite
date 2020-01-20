/* eslint-disable default-case */
import React, { Component } from 'react'
import "./chat.scss";
//Libarys
import { connect } from 'react-redux'
//Actions 
import { getUnread, setReadChanal } from '../../API/message'
import { getUsers, addFriend, removeFriend } from '../../API/messagerPanel'
//Components//
import UserRowIcon from '../ComponentsSimple/UserRowIcon'
import FriendRowIcon from '../ComponentsSimple/FriendRowIcon'
//MaterialUI
import { styled } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';


const Navigation = styled(BottomNavigation)({
    width: '90%',
    textAlign: 'center',
    margin: ' auto',

});
let ws
let subscribe
let subscriptionName = "general"

class RegistrationForm extends Component {

    componentDidMount() {
        ws = this.props.ws
        this.props.getUnread()
        this.makeSubscription()
        this.props.setPanelMode('friends')
    }

    makeSubscription() {
        if (ws.ready) {
            ws.chanalTopic = subscriptionName
            subscribe = ws.subscribe()
            console.log(subscribe,"MAKED");
            this.props.setWsSubscribe(subscribe)
        } else {
            setTimeout(() => {
                this.makeSubscription()
            }, 500);
        }
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

    setDialog = (collocutor) => {
        let chanel
        if (collocutor !== "general") {
            //ws chanal name calculate: minID + "/" + maxID
            chanel = collocutor.id < this.props.userID ?
                `${collocutor.id}and${this.props.userID}` :
                `${this.props.userID}and${collocutor.id}`
        } else {
            chanel = collocutor
        }
        if (chanel !== subscriptionName) {
            this.props.setChat(collocutor)
            subscriptionName = chanel
            this.props.ws.chanalTopic = chanel
            this.props.ws.refreshChat()
            this.props.getUnread()
            this.makeSubscription()
            setReadChanal(chanel)
        }
    }


    constructorUsersColumn(users, mode, online) {
        if (users) {
            switch (mode) {
                case "friends":
                    return (
                        <React.Fragment>
                            <div
                                onClick={() => this.setDialog("general")}
                                className="userRowIcons">
                                <img src={`${window.location.origin}/img/avatars/chat.png`} alt="chat" />
                                <div
                                    style={{ margin: "auto" }}
                                >
                                    <h3>Общий</h3>
                                </div>
                            </div>
                            {
                                users.map(user =>
                                    <FriendRowIcon key={`${user.id}`}
                                        removeFriend={(id) => this.removeFriend(id, user.name)}
                                        user={user}
                                        privateDialog={() => {
                                            this.setDialog(user)
                                        }}
                                    />)}
                        </React.Fragment>)
                case "all":
                    return users.map(user =>
                        <UserRowIcon key={`${user.id}`}
                            user={user}
                            online={online}
                            addFriend={(id) => this.addFriend(id, user.name)}
                            privateDialog={() => this.setDialog(user)}
                        />)
            }
        } else {
            return (<h3>Загрузка</h3>)
        }
    }


    render() {
        return (
            <div id="contactPanel" className="contactPanel visiblePanel" >
                <Navigation value={this.props.panelMode}
                    className="contactPanel_navigation"
                    onChange={(event, newValue) => {
                        this.props.setPanelMode(newValue)
                    }}>
                    <BottomNavigationAction label="Друзья" value="friends" icon={<EmojiPeopleTwoToneIcon />} />
                    <BottomNavigationAction label="Поиск" value="all" icon={<SearchIcon />} />
                </Navigation>
                <div className="searchResult">
                    {this.constructorUsersColumn(this.props.contacts, this.props.panelMode, this.props.usersOnline)}
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
        userID: state.user.id,
        usersOnline: state.webSocket.usersOnline,
    }),
    dispatch => ({
        getUnread: () => dispatch(getUnread()),
        setPanelMode: (modeName) => dispatch(getUsers(modeName)),
        notification: (notificParams) => dispatch({ type: "PUSH_NOTIFICATION_ADD", notificParams }),
        setChat: (collocutor) => dispatch({ type: "SET_CHAT", collocutor }),
        setWsSubscribe: (subscribe) => dispatch({ type: "SET_SUBSCRIBE", subscribe }),
    })
)(RegistrationForm);