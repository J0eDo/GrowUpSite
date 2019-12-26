const SERVER_IP = "http://185.87.194.11:3333"


//User administrated
export const LOGIN = () => { return `${SERVER_IP}/login` }
export const REGISTRATION = () => { return `${SERVER_IP}/registration` }
export const USER_DATA = () => { return `${SERVER_IP}/userData` }
export const USER_EXIT = () => { return `${SERVER_IP}/exit` }
export const USER_EDIT_SETTING = () => { return `${SERVER_IP}/setUserSetting` }
//Chat administrated
export const ENTER_CHAT = () => { return `${SERVER_IP}/enterChat` }
