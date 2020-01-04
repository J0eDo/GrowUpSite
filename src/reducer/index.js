import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import fighterChange from './fighterChange'
import findFighters from './filterFighters'
import user from './user'
import messager from './messager'
import notifications from './pushNotification'

const reducer = combineReducers({
  user,
  messager,
  notifications,
  fighterChange,
  findFighters
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));