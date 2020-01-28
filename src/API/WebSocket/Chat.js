import Ws from '@adonisjs/websocket-client'
import { getChat } from '../message'

export class SocketConnection {

    constructor() {
        this.ready = false
        this.pushEvent = null
        this.sendMessage = null
        this.messagesRefresh = null
    }

    connection() {
        this.ws = Ws('ws://185.87.194.11:3333')
            .withJwtToken(localStorage.getItem("WS_TOKEN"))
            .connect()
        this.ws.on('open', (res) => {
            this.ready = true
        })
        this.ws.on('close', () => {
            this.ready = false
        })
        return this
    }

    refreshChat(chanal) {
        if (this.messagesRefresh) {
            getChat(this.chanalTopic, this.messagesRefresh)
        } else {
            this.refreshChatTimeout = setTimeout(() => {
                this.refreshChat(chanal)
            }, 500);
        }
    }

    close = () => {
        if (this.ws) {
            this.ws.close()
            clearTimeout(this.refreshChatTimeout)
        }
    }

    subscribe = (chanal = "general") => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat:' + chanal), 1000)
        } else {
            this.chanalTopic = chanal
            this.refreshChat(chanal)
            let result = this.ws.getSubscription('chat:' + chanal)
            if (!result) {
                result = this.ws.subscribe('chat:' + chanal);
                result.on('message', (message) => {
                    console.log("enter", message);

                    this.sendMessage(message)
                })
            }
            return result
        }
    }
}

export default new SocketConnection()