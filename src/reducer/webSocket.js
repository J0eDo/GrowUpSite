
const webSocket = (state, action) => {
    switch (action.type) {

        case "SET_WEBSOCKET":
            console.log(action, "ACTION");
            
            return {
                ...state,
                subscribe:action.subscribe
            }
        default:
            return {
                ...state
            }
    }

}

export default webSocket