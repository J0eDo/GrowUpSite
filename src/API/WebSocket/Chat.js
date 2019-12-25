import Ws from '@adonisjs/websocket-client'

export class SocketConnection {

    connection() {
        this.ws = Ws('ws://185.87.194.11:3333').connect()
        this.ws.on('open', (res) => {
            console.log(res, "OPEN");
            this.subscribe(this.ws)
        })

        this.ws.on('close', (res) => {
            console.log(res, "ERRROR");

        })
        return this
    }

    subscribe = (handler) => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat'), 1000)
        } else {
            this.ws.on('error', (res) => {
                console.log(res, "ERRROR_SUB");
            })

            this.ws.on('message', (message) => {
                /*handler sometimes an object */
               typeof handler==="function"&& handler(message)
            })
            return this.ws
        }
    }
}

export default new SocketConnection()