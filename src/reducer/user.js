import axios from 'axios';


const userReducer = (state, action) => {
    switch (action.type) {
        case "GET_TOKEN":
            return { token: action.token }
        case "REGISTRATION_ERROR":
            return {
                ...state,
            }
        case "ERROR_REGISTRATED":
            return {
                ...state,
                errorReg: action.errorReg
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                loginError: action.loginError
            }
        case "SET_USER_DATA":
            return {
                ...state,
                userName: action.userName,
                avatarName: action.avatar,
                panelMode: "primary"
            }
        case "SET_PANEL_MODE":
            return {
                ...state,
                panelMode: action.panelMode
            }
        case "SAVE_SETTINGS":
            return {
                ...state,
                avatarName: action.avatar
            }
        case "EXIT_ACCOUNT":
            return ({})
        default:
            if (localStorage.getItem("TOKEN")) {
                const token = localStorage.getItem("TOKEN")
                axios.defaults.headers.common["Authorization"] = token
                return {
                    ...state,
                    token: token,
                    panelMode: "Loading"
                }
            }
            return {
                ...state,
                token: null,
            }
    }

}

export default userReducer