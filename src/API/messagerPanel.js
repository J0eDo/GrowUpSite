//Libary
import axios from 'axios'
//Routs server
import {
    GET_USERS,
    GET_FRIENDS,
    ADD_FRIEND,
    REMOVE_FRIEND,
    USERS_BY_ID,
    GET_COLLOCUTORS
} from './routing'

export const getUsers = (props, id) => dispatch => {
    let route;
    switch (props) {
        case "friends":
            route = GET_FRIENDS
            break;
        case "all":
            route = GET_USERS
            break;
        case "online":
            route = USERS_BY_ID
            break;
        default:
            route = GET_COLLOCUTORS
            break;
    }


    axios.get(route(), {
            params: {
                id
            }
        })
        .then((res) => {
            if (res.data !== null) {
                dispatch({
                    type: "PANEL_MODE",
                    mode: props,
                    users: res.data.users
                })
            }
        })
}

export const addFriend = (friendID) => {
    axios.get(ADD_FRIEND(), {
        params: {
            friendID
        }
    })
}

export const removeFriend = (friendID) => {
    axios.get(REMOVE_FRIEND(), {
        params: {
            friendID
        }
    })
}