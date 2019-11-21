import fightersList from "../contentData/fighters.json"

const initialState = {
    searched:  fightersList[0]
}
   
function getFighter(fighterID){
    //TO DO repone to data-base
    return fightersList[fighterID]
}

export default function fighters (state = initialState, action){
    if(action.type==="fighterChange"){
        return {
            ...state,
            searched :  getFighter(action.fighterSearchedID)
        }
    }
    return state; 
   
}