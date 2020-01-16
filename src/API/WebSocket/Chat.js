import Ws from '@adonisjs/websocket-client'
import { getChat } from '../message'
export class SocketConnection {

    constructor() {
        this.token = localStorage.getItem("WS_TOKEN")
        this.pushEvent = null
        this.sendMessage = null
        this.chanalTopic = null
        this.messagesRefresh = null
        this.onlineIndicator = null
        this.dispatchOnline = null
        this.usersOnlineID =[]
    }



    connection() {
        this.ws = Ws('ws://185.87.194.11:3333')
            .withJwtToken(this.token)
            .connect()
        this.ws.on('open', (res) => {
            this.onlineIndicator.style.color = "green"
            console.log(res, "OPEN_WS");

        })
        this.ws.on('close', () => {
            this.onlineIndicator.style.color = "red"
        })
        return this
    }

    refreshChat() {
        if (this.messagesRefresh) {
            getChat(this.chanalTopic, this.messagesRefresh)
        } else {
            setTimeout(() => {
                this.refreshChat()
            }, 500);

        }
    }

    refreshOnline() {
        setInterval(() => {
            this.dispatchOnline(this.usersOnlineID)
            this.usersOnlineID = []
        }, 5000);
    }


    subscribe = () => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat:' + this.chanalTopic), 1000)
        } else {
            this.refreshChat()
            const result = this.ws.subscribe('chat:' + this.chanalTopic);
            result.on('error', (res) => {
                this.onlineIndicator.style.color = "red"
            })
            result.on('message', (message) => {
                this.sendMessage(message)
            })
            result.on('push', (action) => {
                this.pushEvent(action)
            })
            result.on('line', (user) => {
                if (!this.usersOnlineID.includes(user.id)) {
                    this.usersOnlineID.push(user.id)
                }
            })
            return result
        }
    }

    setHandler(push) {
        this.pushEvent = push
    }

}

export default new SocketConnection()