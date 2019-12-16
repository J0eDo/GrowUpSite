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
            console.log(action.errorReg);

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
                userName: action.userName
            }
        case "EXIT_ACCOUNT":
            return ({})
        default:
            if (localStorage.getItem("TOKEN")) {
                const token = localStorage.getItem("TOKEN")
                axios.defaults.headers.common["Authorization"] = token
                return { token: token }
            }
            return { token: null }
    }

}

export default userReducer