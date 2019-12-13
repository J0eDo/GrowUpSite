import fightersData from '../contentData/fighters.json'
const initialState = {
    searchedPart:"",
    fightersListSort: fightersData
}
 


export default function filterFighters (state = initialState, action){
    if(action.type==="findFighter"){     
        return{
            searchedPart : action.searchedPart,
            fightersListSort: fightersData.filter(key=> key.name.toLowerCase().includes(action.partName.toLowerCase()))
        }
    }
    return state; 
}