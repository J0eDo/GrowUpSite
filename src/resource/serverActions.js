export const SERVER_IP = "http://185.87.194.11:3333"
export const  LOGIN = (login,password) => {return  `${SERVER_IP}/login/:${login}/${password}`}
export const REGGISTRATION = (login,password,nickname,sex) => {return  `${SERVER_IP}/registration/${login}/${password}/${nickname}/${sex}`}
