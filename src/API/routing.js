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
export const ADD_FRIENDS = () => { return `${SERVER_IP}/addFriend` }




//Chat administrated REMOVE!
export const ENTER_CHAT = () => { return `${SERVER_IP}/enterChat` }
