//Libary
import axios from 'axios'
//Routs server
import { ENTER_CHAT} from './routing'



export const enterChat = message => {
    axios.get(ENTER_CHAT(), {
        params: {
            message:message
        }
    })
        .then((res) => {
           console.log(res);     
        })
}


