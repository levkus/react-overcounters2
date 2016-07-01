// Action creator returns an Action (an object with type and payload)
import axios from 'axios'
import heroes from 'static/heroes.json'

export const FETCH_HEROES = 'FETCH_HEROES'
export const SELECT_HERO = 'SELECT_HERO'
export const FETCH_BATTLENET = 'FETCH_BATTLENET'

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
  const url = `https://api.lootbox.eu/pc/eu/${tag}/quick-play/heroes`
  const request = axios.get(url)
  return {
    type: FETCH_BATTLENET,
    payload: request
  }
}
