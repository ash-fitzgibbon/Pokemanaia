// import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'
export const SET_JV = 'SET_JV'
export const SET_POKEMON = 'SET_POKEMON'

export function setPokemon(pokemon) {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  }
}

export function setJV(pokemon) {
  return {
    type: SET_JV,
    payload: pokemon,
  }
}
