import axios from 'axios';


const userReducer = (state, action) => {
    let newState = {...state }
    switch (action.type) {
        case "GET_TOKEN":
            newState.token = action.token
            return newState
        case "AUTH_ERROR":
            alert("ERROR")
            newState.auth = false
            return newState
        case "SET_USER_DATA":
            newState.auth = true
            newState.id = action.id
            newState.userName = action.userName
            newState.avatarName = action.avatar
            newState.panelMode = "primary"
            return newState
        case "SET_PANEL_MODE":
            newState.panelMode = action.panelMode
            return newState
        case "SAVE_SETTINGS":
            newState.avatarName = action.avatar
            return newState
        case "EXIT_ACCOUNT":
            return ({})
        default:
            if (localStorage.getItem("TOKEN")) {
                const token = localStorage.getItem("TOKEN")
                axios.defaults.headers.common["Authorization"] = token
                newState.token = token
                newState.auth = true
                return newState
            }
            newState.auth = false
            newState.token = null
            newState.panelMode = "Loading"
            return newState
    }
}

export default userReducer