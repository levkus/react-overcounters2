import { FETCH_BATTLENET, FETCHING_ON, FETCHING_OFF } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = { topHeroes: [], fetching: false }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BATTLENET:
      const topPickedHeroes = _.slice(action.payload.data, 0, 4)
      return { ...state, topHeroes: topPickedHeroes }

    case FETCHING_ON:
      return { ...state, fetching: true }

    case FETCHING_OFF:
      return { ...state, fetching: false }

    default:
      return state
  }
}
