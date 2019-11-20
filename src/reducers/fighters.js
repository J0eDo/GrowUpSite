import fightersList from "../contentData/fighters.json"

const initialState = {
    searched:  fightersList[0]
}
   


export default function fighters (state = initialState, action){
    if(action.type==="fighterChange"){
        return {
            ...state,
            searched : fightersList[action.fighterSearchedID]
        }
    }
    return state; 
   
}