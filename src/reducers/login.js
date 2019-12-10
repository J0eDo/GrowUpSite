const initialState = {
    user: false,
    inLogin:false
}

export default function login_user(state = initialState, action){
    if(action.type==="login"){
        return {user: action.user,
                inLogin:true}
    } 
    return state;
   
}