import axios from 'axios';


const userReducer = (state, action) => {
    switch (action.type) {
        case "REGISTRATION":
            return { token: action.token }
        case "REGISTRATION_ERROR":
            return {
                ...state,
            }
        case "LOGIN":
            return { token: action.token }
        case "LOGIN_ERROR":
            return {
                ...state,
                loginError:action.loginError
            }
        case "SET_USER_DATA":
            return {
                ...state,
                user: action.user
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