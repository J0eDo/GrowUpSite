import React, { Component } from 'react';
import "./chat.scss";
import TextField from '@material-ui/core/TextField';
/*Libarys */
import { connect } from 'react-redux'
/*Actions */
/* import { autorizated, registrated } from '../../API/api'
 */
import Messages from './Message'
import { Link } from "react-router-dom";

class RegistrationForm extends Component {

    state = {
        keyMessages: 0,
        messages: []
    }

    componentDidMount() {
        const input = document.getElementById("inputMessage");
        const submit = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                submit(input.value)
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
                    { this.props.userName ?  this.state.messages.map(element => 
                    <Messages key={"keyMes" + (++this.state.keyMessages)} dataMessage={element} />):
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
    state => ({ userName: state.user.userName }),
    dispatch => ({})
)(RegistrationForm);