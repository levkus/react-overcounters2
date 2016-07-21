import { SET_TAG, SET_PLATFORM, SET_REGION, SET_GAME_MODE, FETCH_BATTLENET, FETCHING } from '../actions/index'
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
    case SET_TAG:
      return { ...state, battleTag: action.battleTag }

    case SET_PLATFORM:
      return { ...state, platform: action.platform }

    case SET_REGION:
      return { ...state, region: action.region }

    case SET_GAME_MODE:
      return { ...state, mode: action.mode }

    case FETCH_BATTLENET:
      const topPickedHeroes = _.slice(action.payload.data, 0, 4)
      return { ...state, topHeroes: topPickedHeroes }

    case FETCHING:
      return { ...state, fetching: action.payload }

    default:
      return state
  }
}
