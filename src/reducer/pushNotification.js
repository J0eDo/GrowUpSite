const defaultState = {
    notifications: []
}

let idNortification = 0
let notifications = []

const pushNotification = (state = defaultState, action) => {
    let newState = {...state}
    switch (action.type) {
        case "PUSH_NOTIFICATION_ADD":
            action.notificParams.id = idNortification++;
            newState.notifications = JSON.parse(JSON.stringify(state.notifications))
            newState.notifications.push(action.notificParams)
            return newState
        case "PUSH_NOTIFICATION_REMOVE":
            notifications = []
            notifications = state.notifications.filter(
                Element => Element.id !== action.notificationID)
            return {
                ...state,
                notifications
            }
        default:
            return newState
    }

}

export default pushNotification