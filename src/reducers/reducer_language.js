import { SWITCH_LANGUAGE } from '../actions/index'
import lang from 'static/lang/lang'

const INITIAL_STATE = lang.en

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return { ...state, lang: action.payload.language, names: action.payload.names, ui: action.payload.ui }

    default:
      return state
  }
}
