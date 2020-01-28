import React, { Component } from 'react';
import "./chat.scss";
//Libarys
import { connect } from 'react-redux'
//Actions 
import { addNotification } from '../../actions/notification'
//WebSockets
import wsGeneral from '../../API/WebSocket/General'
import wsChat from '../../API/WebSocket/Chat'
//Components 
import ContactPanel from './ContactPanel'
import Chat from './Chat'
import FlashMessage from '../ComponentsSimple/FlashMessage'
import { getUserData } from '../../API/userProfile'


let countNortification = 0;


class RegistrationForm extends Component {

    state = {
        panelOpen: false
    }

    inputEvent() {
        setTimeout(() => {
            if ( this.subscribeGeneral._state==='open') {
                this.subscribeGeneral.emit('push', {
                    event: "USER_ONLINE",
                    userName: this.props.userName,
                })
            } else {
                this.inputEvent()
            }
        }, 1000);
    }

    wsGeneralStart() {
        wsGeneral.dispatchOnlineUsers = this.props.getUsersOnLine.bind(this)
        wsGeneral.connection(this.conectionIndicated.bind(this))
        wsGeneral.refreshOnline()
        this.subscribeGeneral = wsGeneral.subscribe()
        console.log(this.subscribeGeneral,"GENERAL");
        
        this.selfOnline()
        wsGeneral.addNotification = this.notificationHandler.bind(this)
        this.inputEvent()
    }

    componentDidMount() {
        this.props.getData()
        this.contactPanel = document.getElementById("contactPanel")
        this.onlineIndicator = document.getElementById('online_indicator')
        this.wsGeneralStart()
        wsChat.connection()
    }

    conectionIndicated(ready) {
        let color = ready ? 'green' : 'red'
        this.onlineIndicator.style.color = color
    }


    selfOnline() {
        this.selfOnlineInterval = setInterval(() => {
            this.subscribeGeneral._state==='open'&&
            this.subscribeGeneral.emit('line', { id: this.props.userID })
        }, 3000);
    }

    notificationHandler(notific) {
        console.log(this.props.collocutor, "COLLOCUTOR")
        switch (notific.event) {
            case "NEW_MESSAGE":
                if (notific.userID !== this.props.collocutor.id &&
                    notific.collocutorID === this.props.userID) {
                    this.props.addUnread()
                }
                break;
            default:
                this.props.addNotification(notific)
                break;
        }
    }


    nortifications(events) {
        return (
            events.map(element =>
                <div
                    className="notification_conteiner"
                    key={`keyNotific ${++countNortification}`}
                    onClick={
                        () => this.props.removeNortifications(element.id)}>
                    <FlashMessage
                        bodyEvent={element}
                    />
                </div>
            )
        )
    }

    panelVisible = () => {
        if (this.state.panelOpen) {
            this.contactPanel.classList.remove("visiblePanel")
            this.contactPanel.classList.add("unvisiblePanel")
            this.setState({ panelOpen: false })
        } else {
            this.contactPanel.classList.remove("unvisiblePanel")
            this.contactPanel.classList.add("visiblePanel")
            this.setState({ panelOpen: true })
        }
    }

    componentWillUnmount() {
        wsGeneral.close()
        wsChat.close()
        clearInterval(this.selfOnlineInterval)

    }

    render() {
        return (
            <div className="messager">
                <ContactPanel ws={wsChat} />
                <Chat
                    ws={wsChat}
                    generalChanal={this.subscribeGeneral}
                    panelVisible={this.panelVisible.bind(this)} />
                <div className="notification_conteiner">
                    {
                        this.nortifications(this.props.notifications)
                    }
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        userName: state.user.userName,
        notifications: state.notifications.notifications,
        userID: state.user.id,
        subscribe: state.webSocket.subscribe,
        collocutor: state.chat.collocutor,
    }),
    dispatch => ({
        removeNortifications: (ID) => {
            dispatch({
                type: "PUSH_NOTIFICATION_REMOVE",
                notificationID: ID
            })
        },
        getData: () => dispatch(getUserData()),
        getUsersOnLine: (usersOnline) => dispatch({ type: "SET_USERS_ONLINE", usersOnline }),
        addNotification: (nortific) => dispatch(addNotification(nortific)),
        addUnread: () => dispatch({ type: "ADD_UNREAD" })
    })
)(RegistrationForm);