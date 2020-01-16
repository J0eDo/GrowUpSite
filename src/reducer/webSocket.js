
const webSocket = (state, action) => {
    switch (action.type) {

        case "SET_WEBSOCKET":
            return {
                ...state,
                subscribe:action.subscribe
            }
        case "SET_USERS_ONLINE":
            console.log(action,"DISPATCH");
            return{
                ...state,
                usersOnline : action.usersOnline
            }
        default:
      
            return {
                ...state,   
                usersOnline:[]
            }
    }

}

export default webSocket