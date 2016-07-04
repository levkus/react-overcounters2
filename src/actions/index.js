// Action creator returns an Action (an object with type and payload)
import axios from 'axios'
import heroes from 'static/heroes_en.json'

export const FETCH_HEROES = 'FETCH_HEROES'
export const SELECT_HERO = 'SELECT_HERO'
export const FETCH_BATTLENET = 'FETCH_BATTLENET'
export const FETCHING_ON = 'FETCHING_ON'
export const FETCHING_OFF = 'FETCHING_OFF'

export function fetchHeroes () {
  return {
    type: FETCH_HEROES,
    payload: heroes
  }
}

export function selectHero (alias) {
  return {
    type: SELECT_HERO,
    payload: alias
  }
}

export function fetchBattlenet (tag) {
  const convertedTag = tag.replace('#', '-')
  const url = `https://api.lootbox.eu/pc/eu/${convertedTag}/quick-play/heroes`
  const request = axios.get(url)
  return {
    type: FETCH_BATTLENET,
    payload: request
  }
}

export function fetchingOn (text) {
  return { type: FETCHING_ON, text }
}

export function fetchingOff (text) {
  return { type: FETCHING_OFF, text }
}
