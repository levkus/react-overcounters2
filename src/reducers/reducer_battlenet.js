import { FETCH_BATTLENET, FETCHING_ON, FETCHING_OFF } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = { topHeroes: [], fetching: false }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BATTLENET:
      const topPickedHeroes = _.slice(action.payload.data, 0, 4)
      return { ...state, topHeroes: topPickedHeroes }

    case FETCHING_ON:
      console.log(action.text)
      return { ...state, fetching: true }

    case FETCHING_OFF:
      console.log(action.text)
      return { ...state, fetching: false }

    default:
      return state
  }
}
