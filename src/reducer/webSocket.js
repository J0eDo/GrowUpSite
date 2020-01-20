
const defaultState = {
    isReady :false,
    usersOnline :[]
}

const webSocket = (state=defaultState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case "SET_SUBSCRIBE":   
            newState.subscribe = action.subscribe
            return newState
        case "SET_USERS_ONLINE":
            let usersOnline  = JSON.parse(JSON.stringify(action.usersOnline))
            newState.usersOnline = usersOnline
            return newState
        default:
            return newState
    }

}

export default webSocket