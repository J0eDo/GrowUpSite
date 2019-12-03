import {combineReducers} from 'redux';

import fighterChange from './fighterChange'
import findFighters from './filterFighters'
import login from './login'

 export default combineReducers({
    login,
    fighterChange,
    findFighters
 })

