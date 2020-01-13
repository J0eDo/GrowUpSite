//Libary
import axios from 'axios'
//Routs server
import {
    GET_USERS, GET_FRIENDS,
    ADD_FRIEND, REMOVE_FRIEND
} from './routing'

export const getUsers = (props, nortific) => dispatch => {
    let route;
    switch (props) {
        case "friends":
            route = GET_FRIENDS
            break;
        case "all":
            route = GET_USERS
            break;
        default: break;
    }
    axios.get(route())
        .then((res) => {
            dispatch({
                type: "PANEL_MODE",
                mode: props,
                users: res.data.users
            })
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

