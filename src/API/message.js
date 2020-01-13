//Libary
import axios from 'axios'
//Routs server
import {
    SAVE_MESSAGE, GET_CHAT
} from './routing'

export const saveMessage = (chanal, message) => {
    axios.get(SAVE_MESSAGE(), {
        params: {
            chanal,
            message
        }
    }).then((res) => console.log(res))
}

export const getChat = (chanal, handlerChat) => {
    axios.get(GET_CHAT(), {
        params: {
            chanal
        }
    })
        .then((res) => {
            handlerChat(res.data.messages)
            console.log(res.data.messages)
        }
        )
}