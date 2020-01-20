const defaultState = {
    barMode: "friends"
}


const messager = (state = defaultState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case "PANEL_MODE":
            let barMode = action.mode
            let users = action.users
            newState = {
                barMode, users
            }
            return newState
        default:
            return newState
    }

}

export default messager