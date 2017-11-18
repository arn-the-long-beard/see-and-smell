import see from './See/reducer'
import stink from './Stink/reducer'
import {combineReducers} from 'redux'

const seeAndStink = combineReducers({
  see, stink
})

export default seeAndStink
