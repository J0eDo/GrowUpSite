//Libary
import axios from 'axios'
//Routs server
import { GET_USERS, GET_FRIENDS, ADD_FRIENDS } from './routing'

export const getUsers = props => dispatch => {
    let route;
    switch (props) {
        case "friends":
            route = GET_FRIENDS
            break;
        case "all":
            route = GET_USERS
            break;
    }
    axios.get(route())
        .then((res) => {
            console.log(res,"IT_DISPATCH");
            
            dispatch({
                type: "PANEL_MODE",
                mode: props,
                users: res.data.users
            })
        })
}

export const addFriend = (friendID) => {
    axios.get(ADD_FRIENDS(), {
        params: {
            friendID
        }
    })
        .then(() => {
            alert("sucses!")
        })
}

