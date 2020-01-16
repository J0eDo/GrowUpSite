/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import "./chat.scss";
//Libarys 
import { connect } from 'react-redux'
//Actions 
import ChatWebSocket from '../../API/WebSocket/Chat'
import { addNotification } from '../../actions/notification'
import { saveMessage } from '../../API/message'
//Components
import Messages from '../ComponentsSimple/Message'
//MaterialUI
import chatIcon from '../../imgElements/chat.png'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import scrollIntoView from 'dom-scroll-into-view';


const ContactBtn = styled(Button)({
    backgroundColor: "#395969",
    position: "fixed",
    width: "3vw",
    top: "10vh",
    marginLeft: "5vw"
});



class Chat extends React.Component {

    state = {
        keyMessages: 0,
        messages: [],
        push: [],
        ready: false
    }

    waitWS() {
        setTimeout(() => {
            if (ChatWebSocket.ws._connectionState === "open") {
                this.props.subscribe.emit('push', {
                    event: "USER_ONLINE",
                    userName: this.props.userName,
                })
                this.onlineHandler = this.selfOnline()
            } else {
                this.waitWS()
            }
        }, 1000);
    }


    selfOnline() {
        setInterval(() => {
            if (ChatWebSocket.ws._connectionState === "open") {
                this.props.subscribe.emit('line', {id:this.props.userID})
            }
        }, 3000);
    }


    messagesRefresh(newMessages) {
        this.setState({ messages: newMessages })
    }

    componentDidMount() {
        this.chatConteiner = document.getElementById('chat_canvas')
        this.onlineIndicator = document.getElementById('online_indicator')

        ChatWebSocket.onlineIndicator = this.onlineIndicator
        ChatWebSocket.pushEvent = this.pushEvent.bind(this)
        ChatWebSocket.sendMessage = this.sendMessage.bind(this)
        ChatWebSocket.messagesRefresh = this.messagesRefresh.bind(this)
        ChatWebSocket.dispatchOnline = this.props.setUserOnLine.bind(this)

        ChatWebSocket.refreshOnline(); 
        this.props.setUserOnLine(1)
        this.waitWS()
     

        const input = document.getElementById("inputMessage");
        const handleChange = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== ""
                && ChatWebSocket.ws._connectionState == "open"
            ) {
                handleChange(input.value)
                saveMessage(ChatWebSocket.chanalTopic, input.value)
                input.value = ""
            }
        })

    }

    pushEvent(event) {
        if (event.userName === this.props.userName) {
            event.userName = "Вы"
        }
        this.props.addNotification(event)
    }

    sendMessage(message) {
        const messages = this.state.messages
        messages.push(message)
        this.setState({ messages })
        let lastMessage = this.chatConteiner.lastChild
        scrollIntoView(lastMessage, this.chatConteiner);
    }


    handleChange(inputText) {
        if (inputText.trim()) {
            this.props.subscribe.emit('message', this.messageConstructor(inputText))
        }
    };

    messageConstructor = (text) => ({
        user_name: this.props.userName || "UNCNOWN",
        message: text
    })


    head = (user) => {
        if (user && user !== "general") {
            return (<div className="chat_head">
                <img src={`${window.location.origin}/img/avatars/${user.profile.avatar}.jpg`}
                    alt="avatar"
                    style={{ borderRadius: "50%" }}
                />
                <h3>{user.name}</h3>
            </div>)
        } else {
            return (<div className="chat_head">
                < img src={chatIcon} alt="G" />
                <h3> Общий Чат</h3>
            </div>)
        }

    }



    render() {
        return (
            <div className="chat_conteiner">
                <ContactBtn variant="contained" color="secondary"
                    onClick={this.props.panelVisible}
                >
                    &#x2630;
                        </ContactBtn>
                {this.head(this.props.collocutor)}
                <div className="chat_messages">

                    <div className="chat_messages__canvas"
                        id="chat_canvas"
                    >
                        {this.state.messages.map(element =>
                            <Messages key={"keyMes" + (++this.state.keyMessages)} data={element}
                                isCollocutor={this.props.userName === element.user_name}
                            />)}
                    </div>
                    <div className="chat_input__conteiner">
                        <TextField
                            id="inputMessage"
                            className="chat_input"
                            variant="outlined"
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        userName: state.user.userName || "TEST_NAME",
        panelMode: state.messager.panelMode,
        collocutor: state.chat.collocutor,
        subscribe: state.webSocket.subscribe,
        userID : state.user.id
    }),
    dispatch => ({
        addNotification: (nortific) => dispatch(addNotification(nortific)),
        setUserOnLine:(usersOnline)=>dispatch({type:"SET_USERS_ONLINE",usersOnline})

    })
)(Chat);
