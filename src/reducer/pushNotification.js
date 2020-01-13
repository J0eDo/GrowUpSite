const defaultState = {
    notifications: []
}

let idNortification = 0
let notifications = []

const pushNotification = (state, action) => {
    switch (action.type) {
        case "PUSH_NOTIFICATION_ADD":
            action.notificParams.id = idNortification++;
            state.notifications.push(action.notificParams)
            console.log(state.notifications);
            
            return {
                ...state,
                notifications : state.notifications
            }
        case "PUSH_NOTIFICATION_REMOVE":
            notifications = []
            notifications = state.notifications.filter(
                Element => Element.id != action.notificationID)
            return {
                ...state,
                notifications
            }
        default:
            defaultState.notifications = []
            return {
                ...state,
                notifications:[]
            }
    }

}

export default pushNotification