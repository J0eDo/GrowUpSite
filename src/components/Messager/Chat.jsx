import React from 'react';
import "./chat.scss";
//Libarys 
import { connect } from 'react-redux'
//Actions 
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

let ws
let keyMessages = 0

class Chat extends React.Component {

    state = {
        messages: [],
        push: [],
        ready: false
    }

    messagesRefresh(newMessages) {
        newMessages.sort((a,b)=>(a.id>b.id)?1:((a.id<b.id)?-1:0))
        this.setState({ messages: newMessages })
    }

    componentDidMount() {
        ws = this.props.ws
        this.chatConteiner = document.getElementById('chat_canvas')
        ws.pushEvent = this.pushEvent.bind(this)
        ws.sendMessage = this.sendMessage.bind(this)
        ws.messagesRefresh = this.messagesRefresh.bind(this)

        const input = document.getElementById("inputMessage");
        const handleChange = this.handleChange.bind(this);
        const getCollocutorID = this.getCollocutorID.bind(this)
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== ""
                && ws.ws._connectionState === "open") {
                let collocutorID = getCollocutorID()
                handleChange(input.value)
                console.log(ws,"DATAA");
                
                saveMessage(ws.chanalTopic, input.value, collocutorID)
                input.value = ""
            }
        })

    }

    getCollocutorID() {
        if (this.props.collocutor.id)
            return this.props.collocutor.id
        return 0
    }

    pushEvent(event) {
        if (event.userName === this.props.userName) {
            event.userName = "Вы"
        }
        this.props.addNotification(event)
    }

    sendMessage(message) {
        if (message.chanal === ws.chanalTopic) {
            const messages = this.state.messages
            messages.push(message)
            this.setState({ messages })
            let lastMessage = this.chatConteiner.lastChild
            scrollIntoView(lastMessage, this.chatConteiner);
        }
    }


    handleChange = (inputText) => {
        console.log( this.props.subscribe);
        
        if (inputText.trim() && this.props.subscribe._state === "open") {
            this.props.subscribe.emit('message', this.messageConstructor(inputText))
            if (this.props.collocutor !== "general") {
                this.props.generalChanal.emit('push', {
                    event: "NEW_MESSAGE",
                    userID: this.props.userID,
                    collocutorID: this.props.collocutor.id
                })
            }
        } else {

        }
    };

    messageConstructor = (text) => ({
        user_name: this.props.userName,
        message: text,
        chanal: ws.chanalTopic
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
                            <Messages key={"keyMes" + (++keyMessages)} data={element}
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
        userName: state.user.userName,
        panelMode: state.messager.panelMode,
        collocutor: state.chat.collocutor,
        subscribe: state.webSocket.subscribe,
        userID: state.user.id,
    }),
    dispatch => ({
        addNotification: (nortific) => dispatch(addNotification(nortific)),
        setWebSocket: (ws) => dispatch({ type: "SET_WEBSOCKET", ws }),

    })
)(Chat);
