import { TOGGLE_SETTINGS } from '../actions/index'

const INITIAL_STATE = { showSettings: false }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return { ...state, showSettings: action.payload }

    default:
      return state
  }
}
