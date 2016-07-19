import axios from 'axios'
import _ from 'lodash'

import heroes from 'static/heroes.json'
import languages from '../static/lang/lang'

export const FETCH_HEROES = 'FETCH_HEROES'
export const SELECT_HERO = 'SELECT_HERO'

export const SET_TAG = 'SET_TAG'
export const SET_PLATFORM = 'SET_PLATFORM'
export const SET_REGION = 'SET_REGION'
export const SET_GAME_MODE = 'SET_GAME_MODE'

export const SET_BATTLENET = 'SET_BATTLENET'

export const FETCH_BATTLENET = 'FETCH_BATTLENET'
export const FETCHING = 'FETCHING'
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE'
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS'
export const HIDE_SETTINGS = 'HIDE_SETTINGS'

export const fetchHeroes = () => ({ type: FETCH_HEROES, payload: heroes })

export const selectHero = alias => ({ type: SELECT_HERO, payload: alias })

export const setBattlenet = object => ({
  type: SET_BATTLENET,
  payload: object
})

export const setTag = tag => ({ type: SET_TAG, tag })
export const setPlatform = platform => ({ type: SET_PLATFORM, platform })
export const setRegion = region => ({ type: SET_REGION, region })
export const setGameMode = mode => ({ type: SET_GAME_MODE, mode })

export const fetchBattlenet = (tag, platform = 'pc', region = 'eu', mode = 'quick-play') => {
  const convertedTag = tag.replace('#', '-')
  const url = `https://api.lootbox.eu/${platform}/${region}/${convertedTag}/${mode}/heroes`
  const request = axios.get(url)
  return {
    type: FETCH_BATTLENET,
    payload: request
  }
}

export const fetchingToggle = value => ({ type: FETCHING, payload: value })

export const switchLanguage = lang => {
  const newLang = _.find(languages, { language: lang })
  return {
    type: SWITCH_LANGUAGE,
    payload: newLang
  }
}

export const toggleSettings = value => ({ type: TOGGLE_SETTINGS, payload: value })
