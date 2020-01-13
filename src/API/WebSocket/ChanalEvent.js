import Ws from '@adonisjs/websocket-client'

export class SocketConnection {

    connection() {
        this.ws = Ws('ws://185.87.194.11:3333').connect()
        this.ws.on('open', () => {
            console.log("OPEN");
        })
        this.ws.on('close', () => {
            console.log("save_it")
        })
        
        return this
    }

    

    subscribe = ({ sendMessage, pushEvent , chanal}) => {
        if (!this.ws) {
            setTimeout(() => this.subscribe('event'), 1000)
        } else {
            const result = this.ws.subscribe('event');
            result.on('error', () => {
                alert("save_it")
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