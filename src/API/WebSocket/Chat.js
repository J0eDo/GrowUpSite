import Ws from '@adonisjs/websocket-client'
import {getChat} from '../message'
export class SocketConnection {

    constructor() {
        this.token = localStorage.getItem("WS_TOKEN")
        this.pushEvent = null
        this.sendMessage = null
        this.chanalTopic = null
        this.messagesRefresh = null
    }



    connection() {
        this.ws = Ws('ws://185.87.194.11:3333')
            .withJwtToken(this.token)
            .connect()
        this.ws.on('open', () => {
            console.log("OPEN");
        })
        this.ws.on('close', () => {
            alert("Close");
        })
        return this
    }

    refreshChat() {
        if (this.messagesRefresh) {
            getChat(this.chanalTopic,this.messagesRefresh)
        } else {
            setTimeout(() => {
                this.refreshChat()
            }, 500);

        }
    }

    subscribe = () => {    
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat:' + this.chanalTopic), 1000)
        } else {
            this.refreshChat()
            const result = this.ws.subscribe('chat:' + this.chanalTopic);
            result.on('error', () => {
                console.log("ERRROR_SUB");
            })
            result.on('message', (message) => {
                this.sendMessage(message)

            })
            result.on('push', (action) => {
                this.pushEvent(action)
            })
            return result
        }
    }

    setHandler(push) {
        this.pushEvent = push
    }

}

export default new SocketConnection()