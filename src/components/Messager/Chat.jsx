import React, { Component } from 'react';
import "./chat.scss";
import TextField from '@material-ui/core/TextField';
/*Libarys */
import { connect } from 'react-redux'
import Ws from '@adonisjs/websocket-client'
/*Actions */

import Messages from './Message'
import { Link } from "react-router-dom";
import { stat } from 'fs';

class Chat extends Component {

    state = {
        count: 90,
        keyMessages: 0,
        messages: []
    }

    subscribeToChannel(ws) {
        const chat = ws.subscribe('chat')

        chat.on('error', (res) => {
            console.log(res, "ERRROR_SUB");

        })

        chat.on('message', (message) => {
            const messages = this.state.messages
            messages.push(message)
            this.setState({ messages: messages })
            document.querySelector(".chat_messages__canvas").scrollBy(0, 100);
        })
    }

    startChat() {
        let ws = Ws('ws://185.87.194.11:3333').connect()
        this.ws = ws
        ws.on('open', (res) => {
            console.log(res, "OPEN");
            this.subscribeToChannel(ws)
        })

        ws.on('error', (res) => {
            console.log(res, "ERRROR");

        })
    }


    componentDidMount() {
        this.startChat()
        const input = document.getElementById("inputMessage");
        const submit = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== "") {
                submit(input.value)
                /*  enterChat(input.value) */
                input.value = ""
            }
        })
    }

    handleChange(inputText) {
        if (inputText.trim()) {
            const message = this.messageConstructor(inputText)
            this.ws.getSubscription('chat').emit('message', this.messageConstructor(inputText))
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
                        <h2>Вы не автаризованны</h2>}
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