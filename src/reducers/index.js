import { combineReducers } from 'redux'
import HeroesReducer from './reducer_heroes'

const rootReducer = combineReducers({
  heroes: HeroesReducer
})

export default rootReducer
