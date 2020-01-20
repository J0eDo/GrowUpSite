let defaultState = {
    collocutor: "general",
    unread:[]
}

const chat = (state = defaultState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case "SET_CHAT":
            newState.collocutor = action.collocutor
            return newState
        case "GET_UNREAD":
            newState.unread =  JSON.parse(JSON.stringify(action.unread))
            return newState
        default:
            return newState
    }
}

export default chat


