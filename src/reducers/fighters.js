import fightersList from "../contentData/fighters.json"

const initialState = {
    fighterSearchedID: fightersList[0].id
}

export default function fighters (state = initialState, action){
    if(action.type==="fighterChange"){
        console.log(state ,"STATE");
        
        return{
            ...state,
            fighterSearchedID: state.fighterID
        }
    }
    return state; 
   
}