import { combineReducers, createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import fighterChange from './fighterChange'
import findFighters from './filterFighters'
import userReducer from './user'

 const reducer = combineReducers({
   user: userReducer,
   fighterChange,
   findFighters
})

export const store = createStore(reducer,applyMiddleware(thunk));