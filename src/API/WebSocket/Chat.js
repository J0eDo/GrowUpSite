import Ws from '@adonisjs/websocket-client'
import { getChat } from '../message'

export class SocketConnection {

    constructor() {
        this.token = localStorage.getItem("WS_TOKEN")
        this.chanalTopic = "general"
        this.ready = false
        this.pushEvent = null
        this.sendMessage = null
        this.messagesRefresh = null
    }

    connection() {
        this.ws = Ws('ws://185.87.194.11:3333')
            .withJwtToken(this.token)
            .connect()
        this.ws.on('open', (res) => {
            this.ready = true
        })
        this.ws.on('close', () => {

        })
        return this
    }

    refreshChat() {
        if (this.messagesRefresh) {
            getChat(this.chanalTopic, this.messagesRefresh)
        } else {
            this.refreshChatTimeout = setTimeout(() => {
                this.refreshChat()
            }, 500);
        }
    }



    close = () => {
        this.ws.close()
        clearTimeout(this.refreshChatTimeout)
    }

    setSubscribe = () => {
        this.ws.getSubscription()
    }

    subscribe = () => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat:' + this.chanalTopic), 1000)
        } else {
            this.refreshChat()
            let result = this.ws.getSubscription('chat:' + this.chanalTopic)
            if (!result) {
                result = this.ws.subscribe('chat:' + this.chanalTopic);
            }
            result.on('error', (res) => {
            })
            result.on('message', (message) => {
                this.sendMessage(message)
            })
            return result
        }
    }
}

export default new SocketConnection()