//Libary
import axios from 'axios'
//Routs server
import {
    SAVE_MESSAGE, GET_CHAT, GET_UNREAD, READ_MESSAGE
} from './routing'

export const saveMessage = (chanal, message, collocutor_id) => {
    axios.get(SAVE_MESSAGE(), {
        params: {
            chanal,
            message,
            collocutor_id
        }
    })
}

export const getChat = (chanal, handlerChat) => {
    axios.get(GET_CHAT(), {
        params: {
            chanal
        }
    })
        .then((res) => {
            handlerChat(res.data.messages)
        }
        )
}
export const getUnread = () => dispatch => {
    axios.get(GET_UNREAD())
        .then((res) => {
            console.log(res, "RES");

            dispatch({
                type: "GET_UNREAD",
                unread: res.data.unreadMessages
            })
        })
}

export const setReadChanal = (chanal) => {
    axios.get(READ_MESSAGE(), {
        params: {
            chanal
        }
    })
}