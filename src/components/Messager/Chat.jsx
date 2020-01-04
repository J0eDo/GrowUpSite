import React from 'react';
import "./chat.scss";
//MaterialUI
import TextField from '@material-ui/core/TextField';
//Libarys 
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
//Actions 
import ChatWebSocket from '../../API/WebSocket/Chat'

import {addNotification} from '../../actions/notification'

import Messages from './Message'

let chatStream;

class Chat extends React.Component {
    
    state = {
        keyMessages: 0,
        messages: [],
        push:[]
    }

    componentDidMount() {
       
        ChatWebSocket.connection()

        const sendMessage  = this.sendMessage.bind(this)
        const pushEvent = this.pushEvent.bind(this)
        const handlers ={sendMessage,pushEvent}
        chatStream = ChatWebSocket.subscribe(handlers);

        const input = document.getElementById("inputMessage");
        const handleChange = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== "") {
                handleChange(input.value)
                input.value = ""
            }
        })

        chatStream.emit('push',{
            event:"USER_ONLINE",
            userName:this.props.userName,
        })
    }

    pushEvent(event){
        if(event.userName === this.props.userName){
            event.userName = "Вы"
        }
       this.props.addNotification(event)
    }

    sendMessage (message){      
        const messages = this.state.messages
        messages.push(message)
        this.setState({messages})
        document.querySelector(".chat_messages__canvas").scrollBy(0, 100);
    }


    handleChange(inputText) {
        if (inputText.trim()) {
            chatStream.emit('message', this.messageConstructor(inputText))
        }
    };

    messageConstructor = (text) => ({
        userName: this.props.userName||"UNCNOWN",
        body: text
    })
    
    componentWillUnmount() {
        chatStream && chatStream.close()
    }

    render() {
        return (
            <div className="chat_conteiner">
                <Link to="/">назад</Link>
                <h1>Общий чат</h1>
                <div className="chat_messages__canvas">
                    {this.state.messages.map(element =>
                        <Messages key={"keyMes" + (++this.state.keyMessages)} data={element} />) }
                </div>
                <TextField
                    id="inputMessage"
                    className="input_message"
                    label="&#9881;
                    Введите текст"
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        userName: state.user.userName||"TEST_NAME",
        panelMode: state.messager.panelMode
    }),
    dispatch => ({
        addNotification:(nortific)=> dispatch(addNotification(nortific))
       
    })
)(Chat);
