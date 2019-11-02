import News from "../contentData/news.json"
const initialState = {
    newsSearched: undefined,
    newsWeek:News[1]
}

export default function news(state = initialState, action){
    if(action.type==="newsChange"){
        return{
        ...state,
        newsSearched:action.newsSearched
        }
    } 
    return state;
   
}