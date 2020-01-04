const defaultState = {
    panelMode: "friends"
}

const messager = (state, action) => {
    switch (action.type) {
        case "PANEL_MODE":
            return {
                ...state,
                barMode: action.mode,
                users: action.users
            }
        default:
            return { 
                ...state,
                defaultState: "friends" }
    }

}

export default messager