import Model from "../contentData/models.json"

const initialState = {
    modelSearched : Model[0],
    modelWeek :Model[1],
}

export default function models (state = initialState, action){
    if(action.type==="modelChange"){
        return{
            ...state,
            modelSearched:action.modelSearched
        }
    }
    return state; 
   
}