//Libary
import axios from 'axios'
//Routs server
import { LOGIN, REGISTRATION, USER_DATA, USER_EDIT_SETTING } from './routing'



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
            } else {
                const { field, validation } = res.data[0] || res.data
                dispatch({ type: "ERROR_REGISTRATED", errorReg: { field, validation } })
            }

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
            localStorage.setItem("WS_TOKEN", res.data.token)
            dispatch({ type: "LOGIN", token: token })
        })
        .catch(() => {
            dispatch({ type: "LOGIN_ERROR", loginError: true })
            setTimeout(() => {
                dispatch({ type: "LOGIN_ERROR", loginError: false })
            }, 2000)
        })
}

export const getUserData = () => dispatch =>
    axios.get(USER_DATA())
        .then((res) => {
            const userData = res.data.user;
            const profile = res.data.profile;
            dispatch({
                type: "SET_USER_DATA",
                userName: userData.name,
                avatar: profile.avatar,
                id :userData.id
            })
        })


export const exitedAccount = () => dispatch => {
    localStorage.removeItem("TOKEN")
    dispatch({ type: "EXIT_ACCOUNT" })
    window.location.reload()
}

export const changeSetting = props => dispatch => {
    axios.get(USER_EDIT_SETTING(), {
        params: {
            avatar: props.avatar
        }
    })
        .then(() => {
            dispatch({ type: "SAVE_SETTINGS", avatar: props.avatar })
        })
}