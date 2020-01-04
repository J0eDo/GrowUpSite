import Ws from '@adonisjs/websocket-client'

export class SocketConnection {

    connection() {
        this.ws = Ws('ws://185.87.194.11:3333').connect()
        this.ws.on('open', () => {
            console.log("OPEN");
        })

        this.ws.on('close', () => {
            console.log("ERRROR");
        })
        
        return this
    }

    subscribe = ({ sendMessage, pushEvent }) => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('chat'), 1000)
        } else {
            const result = this.ws.subscribe('chat');
            result.on('error', () => {
                console.log("ERRROR_SUB");
            })
            result.on('message', (message) => {
                if (typeof sendMessage === "function") {
                    sendMessage(message)
                }
            })
            result.on('push', (action) => {
                if (typeof  pushEvent === "function") {
                    pushEvent(action)
                }
              
            })

            return result
        }
    }
}

export default new SocketConnection()