import {combineReducers} from 'redux';

import fighterChange from './fighterChange'
import findFighters from './filterFighters'

 export default combineReducers({
    fighterChange,
    findFighters
 })

