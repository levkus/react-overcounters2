import { FETCH_HEROES, SELECT_HERO } from '../actions/index'
import _ from 'lodash'

const INITIAL_STATE = { all: [], activeHero: null }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HEROES:
      return { ...state, all: action.payload }

    case SELECT_HERO:
      const selectedHero = _.find(state.all, { alias: action.payload })
      return { ...state, activeHero: selectedHero }

    default:
      return state
  }
}
