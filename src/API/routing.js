const SERVER_IP = "http://185.87.194.11:3333"


//User administrated
export const LOGIN = () => { return `${SERVER_IP}/login` }
export const REGISTRATION = () => { return `${SERVER_IP}/registration` }
export const USER_DATA = () => { return `${SERVER_IP}/userData` }
export const USER_EXIT = () => { return `${SERVER_IP}/exit` }
export const USER_EDIT_SETTING = () => { return `${SERVER_IP}/editProfile` }

//Panel
export const GET_USERS = () => { return `${SERVER_IP}/getUsers` }
export const GET_FRIENDS = () => { return `${SERVER_IP}/getFriend` }
export const ADD_FRIEND = () => { return `${SERVER_IP}/addFriend` }
export const REMOVE_FRIEND = () => { return `${SERVER_IP}/removeFriend` }

//Message
export const SAVE_MESSAGE = () =>{return `${SERVER_IP}/saveMessage`}
export const GET_CHAT = () => {return `${SERVER_IP}/getDialog`}
export const GET_UNREAD = () => {return `${SERVER_IP}/getUnread`}
export const READ_MESSAGE = () => {return `${SERVER_IP}/readMessages`}
