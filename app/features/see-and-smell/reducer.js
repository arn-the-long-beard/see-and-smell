import see from './See/reducer'
import smell from './Smell/reducer'
import {combineReducers} from 'redux'

const seeAndSmell = combineReducers({
  see,smell
})

export default seeAndSmell
