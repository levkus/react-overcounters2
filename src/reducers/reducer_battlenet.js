import { FETCH_BATTLENET } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = { topHeroes: [] }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_BATTLENET:
      const topPickedHeroes = _.slice(action.payload.data, 0, 4)
      return { ...state, topHeroes: topPickedHeroes }

    default:
      return state
  }
}
