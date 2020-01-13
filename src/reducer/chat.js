const defaultState = {
    user: "general"
}

const chat = (state, action) => {
    switch (action.type) {
        case "SET_CHAT":
            return {          
                ...state,
                collocutor:action.collocutor
            }
        default:
            return {
                ...state,
                defaultState
            }
    }

}

export default chat


