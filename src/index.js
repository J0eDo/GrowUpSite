/**Libarys */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
/**ReducersCombine*/
import reducer from './reducers'
/**Componenets */
import App from './components/App/App';


const store = createStore(reducer);

render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root'));
