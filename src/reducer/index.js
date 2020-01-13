import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import fighterChange from './fighterChange'
import findFighters from './filterFighters'
import user from './user'
import messager from './messager'
import notifications from './pushNotification'
import webSocket from './webSocket'
import chat from'./chat'

const reducer = combineReducers({
  user,
  messager,
  notifications,
  webSocket,
  chat,

  fighterChange,
  findFighters,

})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));