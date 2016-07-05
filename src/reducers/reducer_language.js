import { SWITCH_LANGUAGE } from '../actions/index'

const INITIAL_STATE = { lang: '', names: [], ui: {} }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      console.log('reducer: ', action.payload)
      return { ...state, lang: action.payload.language, names: action.payload.names, ui: action.payload.ui }

    default:
      return state
  }
}
