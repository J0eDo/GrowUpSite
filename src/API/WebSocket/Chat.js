import Ws from '@adonisjs/websocket-client'

export class SocketConnection{
    subscribeToChannel(ws) {
        const chat = ws.subscribe('chat')

        chat.on('error', (res) => {
            console.log(res, "ERRROR_SUB");

        })

        chat.on('message', (message) => {
            const messages = this.state.messages
            messages.push(message)
            this.setState({ messages: messages })
            document.querySelector(".chat_messages__canvas").scrollBy(0, 100);
        })
    }

    startChat() {
        let ws = Ws('ws://185.87.194.11:3333').connect()
        this.ws = ws
        ws.on('open', (res) => {
            console.log(res, "OPEN");
            this.subscribeToChannel(ws)
        })

        ws.on('error', (res) => {
            console.log(res, "ERRROR");

        })
    }
}

export default new SocketConnection()