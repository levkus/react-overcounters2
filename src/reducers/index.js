import { combineReducers } from 'redux'
import HeroesReducer from './reducer_heroes'
import BattlenetReducer from './reducer_battlenet'

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  battlenet: BattlenetReducer
})

export default rootReducer
