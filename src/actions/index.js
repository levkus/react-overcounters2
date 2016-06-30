// Action creator returns an Action (an object with type and payload)
import heroes from 'static/heroes.json'

export const FETCH_HEROES = 'FETCH_HEROES'
export const SELECT_HERO = 'SELECT_HERO'

export function fetchHeroes () {
  return {
    type: FETCH_HEROES,
    payload: heroes
  }
}

export function selectHero (alias) {
  console.log(alias);
  return {
    type: SELECT_HERO,
    payload: alias
  }
}
