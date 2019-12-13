import fightersList from "../contentData/fighters.json"

const initialState = fightersList[0];
   
function getFighter(fighterID){
    //TO DO repone to data-base
    return fightersList[fighterID]
}

export default function fighterChange (state = initialState, action){
    if(action.type==="fighterChange"){
        return getFighter(action.fighterSearchedID)
    }
    return state; 
   
}