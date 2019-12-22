import React, { Component } from 'react';
import "./chat.scss";
import TextField from '@material-ui/core/TextField';
/*Libarys */
import { connect } from 'react-redux'
import Ws from 'react-websocket'
/*Actions */

import Messages from './Message'
import { Link } from "react-router-dom";

class Chat extends Component {

    state = {
        count:90,
        keyMessages: 0,
        messages: []
    }

  

    componentDidMount() {
        let ws = new WebSocket('ws://185.87.194.11:3333')
        ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
          }
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
            const messageTitle = this.dataMessage(inputText)
            this.state.messages.push(messageTitle)
            this.setState({})
        }
    };

    dataMessage = (text) => ({
        messageUserName: this.props.userName,
        messageText: text
    })


    render() {
        return (
            <div className="chat_conteiner">
                <Link to="/">назад</Link>
                <h1>Бойцовский чат</h1>
                <div className="chat_messages__canvas">
                    {this.props.userName ? this.state.messages.map(element =>
                        <Messages key={"keyMes" + (++this.state.keyMessages)} dataMessage={element} />) :
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