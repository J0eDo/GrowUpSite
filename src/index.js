import React from 'react';
import {render} from 'react-dom';
import App from './components/App/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

function reducerApp(state = [], action){
 if(action.type==="LogRoad")
 return[
    ...state,
    action.pageNow
    ]
return state;
}

const store = createStore(reducerApp);

store.subscribe(()=>{
    console.log("SUBSCRIBE  ", store.getState());    
});


function Eventer (){
    let elemMenu = [];
elemMenu = document.querySelectorAll(".menuBtn");
elemMenu.forEach((element)=>(
    element.addEventListener('click', () => {
        store.dispatch({type:"LogRoad", pageNow:element.text})
    })))
} 

render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root'));
Eventer();