//Libary
import axios from 'axios'
//Routs server
import { LOGIN, REGISTRATION, USER_DATA, USER_EXIT } from './routing'


export const registrated = props => dispatch => {
    const { password, login, name } = props
    axios.get(REGISTRATION(), {
        params: {
            login: login,
            password: password,
            name: name
        }
    })
        .then((res) => {
            if (res.data.accessToken) {
                const token = 'Bearer ' + res.data.accessToken.token
                axios.defaults.headers.common["Authorization"] = token
                localStorage.setItem("TOKEN", token)
                dispatch({ type: "LOGIN", token: token })
            }
            console.log(res);
        })
        .catch((e) => {
            console.log(e);
        })
}

export const autorizated = props => dispatch => {
    const { password, login } = props
    axios.get(LOGIN(), {
        params: {
            login: login,
            password: password
        }
    })
        .then((res) => {
            dispatch({ type: "LOGIN_ERROR", loginError: false })
            const token = 'Bearer ' + res.data.token
            axios.defaults.headers.common["Authorization"] = token
            localStorage.setItem("TOKEN", token)
            dispatch({ type: "LOGIN", token: token })
        })
        .catch((res) => {
            dispatch({ type: "LOGIN_ERROR", loginError: true })
            setTimeout(()=>{
                dispatch({ type: "LOGIN_ERROR", loginError: false })
            },2000)
        })
}

export const getUserData = () => dispatch =>
    axios.get(USER_DATA())
        .then((res) => {
            dispatch({ type: "SET_USER_DATA", user: res.data.user })
        })


export const exitedAccount = () => dispatch =>{
    dispatch({ type: "EXIT_ACCOUNT" })
    localStorage.removeItem("TOKEN")
    window.location.reload();
}
    
          