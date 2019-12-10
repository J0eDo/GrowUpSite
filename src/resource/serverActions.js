export const SERVER_IP = "http://185.87.194.11:3333"
export const  LOGIN = () => {return  `${SERVER_IP}/login`}
export const REGISTRATION = () =>  {return  `${SERVER_IP}/registration`}
export const TEST = (login) =>{return `${SERVER_IP}/login/:${login}`}
