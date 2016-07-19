import { combineReducers } from 'redux'
import HeroesReducer from './reducer_heroes'
import BattlenetReducer from './reducer_battlenet'
import LanguageReducer from './reducer_language'
import UiReducer from './reducer_ui'

const rootReducer = combineReducers({
  heroes: HeroesReducer,
  battlenet: BattlenetReducer,
  ui: UiReducer,
  currentLanguage: LanguageReducer
})

export default rootReducer
