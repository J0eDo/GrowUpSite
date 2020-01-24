import Ws from '@adonisjs/websocket-client'

export class SocketConnection {

    constructor() {
        this.token = localStorage.getItem("WS_TOKEN")
        this.usersOnlineID = []
    }



    connection(conectionIndicated) {
        this.ws = Ws('ws://185.87.194.11:3333')
            .withJwtToken(this.token)
            .connect()
        this.ws.on('open', (res) => {
            conectionIndicated(true)
        })
        this.ws.on('close', () => {
            conectionIndicated(false)
        })
        this.ws.on('error', () => {
            conectionIndicated(false)
        })
        return this
    }

    refreshOnline() {
        this.dispatchOnlineUsers(this.usersOnlineID)
        this.usersOnlineID = []
        this.refreshOnlineInterval = setTimeout(() => {
            this.refreshOnline()
        }, 4000)
    }

    close = () => {
        this.ws.close()
        clearInterval(this.refreshOnlineInterval)
    }


    subscribe = () => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat:general'), 1000)
        } else {
            const result = this.ws.subscribe('chat:general');
            result.on('push', (action) => {
                this.addNotification(action)
            })
            result.on('line', (user) => {
                if (!this.usersOnlineID.includes(user.id)) {
                    this.usersOnlineID.push(user.id)

                }
            })
            return result
        }
    }
}

export default new SocketConnection()