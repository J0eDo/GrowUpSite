import { combineReducers, createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import fighterChange from './fighterChange'
import findFighters from './filterFighters'
import userProfile from './user'
import messager from './messager'

 const reducer = combineReducers({
   user: userProfile,
   messager : messager,
   fighterChange,
   findFighters
})

export const store = createStore(reducer,applyMiddleware(thunk));