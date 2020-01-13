import React from 'react';
import "./chat.scss";
//MaterialUI
import TextField from '@material-ui/core/TextField';
//Libarys 
import { connect } from 'react-redux'
//Actions 
import ChatWebSocket from '../../API/WebSocket/Chat'
import {addNotification} from '../../actions/notification'
import {saveMessage} from '../../API/message'
//Components
import Messages from '../ComponentsSimple/Message'
//UI
import chatIcon from '../../imgElements/chat.png'



class Chat extends React.Component {
    
    state = {
        keyMessages: 0,
        messages: [],
        push:[],
        ready:false
    }

    waitWS(){
        setTimeout(() => {
            if( this.props.ws){            
                this.props.subscribe.emit('push',{
                    event:"USER_ONLINE",
                    userName:this.props.userName,
                }) 
            }else{
                this.waitWS()
            }
        }, 1000);
    }

    messagesRefresh (newMessages){
        this.setState({messages: newMessages})
    }

    componentDidMount() {

        this.waitWS()
        ChatWebSocket.pushEvent    = this.pushEvent.bind(this)
        ChatWebSocket.sendMessage = this.sendMessage.bind(this)
        ChatWebSocket.messagesRefresh = this.messagesRefresh.bind(this)

        const input = document.getElementById("inputMessage");
        const handleChange = this.handleChange.bind(this);
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter" && input.value !== "") {
                handleChange(input.value)
                saveMessage(ChatWebSocket.chanalTopic,input.value)
                input.value = ""
            }
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
/*         document.querySelector(".chat_messages__canvas").scroll(0, 100);  */
    }


    handleChange(inputText) {
        if (inputText.trim()) {
            this.props.subscribe.emit('message', this.messageConstructor(inputText))
        }
    };

    messageConstructor = (text) => ({
        user_name: this.props.userName||"UNCNOWN",
        message: text
    })
    

    head=(user)=>{
        if(user){
            return (<div className="chat_head">
                <img src={`${window.location.origin}/img/avatars/${user.profile.avatar}.jpg`} 
                alt="avatar" 
                style={{borderRadius:"50%"}}
                />
                    <h3>{user.name}</h3>
               </div>)
        }else{
            return (<div className="chat_head">
                <img src={chatIcon} alt="G"/>
                    <h3> Общий Чат</h3>
               </div>)
        }
      
    }

    render() {
        return (
            <div className="chat_conteiner">
                <button
                onClick={this.props.panelVisible}
                style={{
                    alignSelf:"flex-start",
                    margin:".5rem"
                }}
                >Menu</button>
               {this.head(this.props.collocutor)}
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
        panelMode: state.messager.panelMode,
        collocutor: state.chat.collocutor,
        subscribe: state.webSocket.subscribe
    }),
    dispatch => ({
        addNotification:(nortific)=> dispatch(addNotification(nortific)),
        
    })
)(Chat);
