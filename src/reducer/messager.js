const defaultState = {
    panelMode:"freind"
}

const  messager = (state, action) => {
    switch (action.type) {
        case "PANEL_MODE":
            return { ...state,
                panelMode:action.mode }
        default:
           return defaultState
    }

}

export default messager