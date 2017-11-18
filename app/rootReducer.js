import {combineReducers} from 'redux'

import seeAndStink from './features/see-and-smell/reducer'
import host from './features/Server/reducer'
const rootReducer = combineReducers({
  // short hand property names
//  utilData
  seeAndSmell: seeAndStink,
  host
})
export default rootReducer
