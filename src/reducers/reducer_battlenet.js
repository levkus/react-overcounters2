import { FETCH_BATTLENET, SET_BATTLENET, FETCHING } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = {
  battleTag: '',
  platform: 'pc',
  region: 'eu',
  mode: 'quick-play',
  topHeroes: [],
  fetching: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_BATTLENET:
      const key = Object.keys(action.payload)
      return { ...state, [key]: action.payload[key] }

    case FETCH_BATTLENET:
      const topPickedHeroes = _.slice(action.payload.data, 0, 4)
      return { ...state, topHeroes: topPickedHeroes }

    case FETCHING:
      return { ...state, fetching: action.payload }

    default:
      return state
  }
}
