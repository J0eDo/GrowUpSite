const initialState = {
    user: false,
}

export default function login_user(state = initialState, action){
    if(action.type==="login"){
        console.log(action.user)
        return {user: action.user}
    } 
    return state;
   
}