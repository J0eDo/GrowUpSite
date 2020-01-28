import axios from 'axios';


const userReducer = (state, action) => {
    let newState = {...state }
    switch (action.type) {
        case "GET_TOKEN":
            newState.token = action.token
            return newState
        case "AUTH_ERROR":
            newState.authERR = true
            return newState
        case "ERROR_REGISTRATED":
            newState.errorReg = action.errorReg
            return newState
        case "SET_USER_DATA":
            newState.authERR = false
            newState.id = action.id
            newState.userName = action.userName
            newState.avatarName = action.avatar
            newState.panelMode = "primary"
            newState.auth = true
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
                newState.authERR = false
                newState.auth = true
                return newState
            }
            newState.authERR = false
            newState.token = null
            newState.panelMode = "Loading"
            return newState
    }
}

export default userReducer