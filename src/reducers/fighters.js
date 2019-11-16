import fightersList from "../contentData/fighters.json"

const initialState = {
    fighter:fightersList[0]
}

export default function fighters (state = initialState, action){
    if(action.type==="fighterChange"){
        return{
            ...state,
            fighterSearched:action.fighterChange
        }
    }
    return state; 
   
}