import React, { Component } from 'react';
import "./chat.scss";
//MaterialUI
import TextField from '@material-ui/core/TextField';
//Libarys 
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
//Actions 
import ChatWebSocket from '../../API/WebSocket/Chat'
import Messages from './Message'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import { stat } from 'fs';

let chatStream;

class Chat extends Component {
    
    state = {
        keyMessages: 0,
        messages: []
    }

    componentDidMount() {
        ChatWebSocket.connection()
        const sendMessage  = this.sendMessage.bind(this)
        chatStream = ChatWebSocket.subscribe(sendMessage);

        const input = document.getElementById("inputMessage");
        const submit = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== "") {
                submit(input.value)
                input.value = ""
            }
        })
    }

    sendMessage (message){
        const messages = this.state.messages
        messages.push(message)
        this.setState({messages: messages})
        document.querySelector(".chat_messages__canvas").scrollBy(0, 100);
    }

    componentWillUnmount() {
        chatStream.close()
    }

    handleChange(inputText) {
        if (inputText.trim()) {
            chatStream.emit('message', this.messageConstructor(inputText))
        }
    };

    messageConstructor = (text) => ({
        userName: this.props.userName,
        body: text
    })

    render() {
        return (
            <div className="chat_conteiner">
                <Link to="/">назад</Link>
                <h1>Общий чат</h1>
                <div className="chat_messages__canvas">
                    {this.props.userName ? this.state.messages.map(element =>
                        <Messages key={"keyMes" + (++this.state.keyMessages)} data={element} />) :
                        <RegistrationForm/>}
                </div>
                <TextField
                    id="inputMessage"
                    className="input_message"
                    label="Введите текст"
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        userName: state.user.userName,
        panelMode: state.messager.panelMode
    }),
    dispatch => ({})
)(Chat);