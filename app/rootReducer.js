import {combineReducers} from 'redux'

import seeAndStink from './features/see-and-stink/reducer'
import host from './features/Server/reducer'
const rootReducer = combineReducers({
  // short hand property names
//  utilData
  seeAndStink,
  host
})
export default rootReducer
