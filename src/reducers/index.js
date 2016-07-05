import { combineReducers } from 'redux'
import HeroesReducer from './reducer_heroes'
import BattlenetReducer from './reducer_battlenet'
import LanguageReducer from './reducer_language'

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  battlenet: BattlenetReducer,
  currentLanguage: LanguageReducer
})

export default rootReducer
