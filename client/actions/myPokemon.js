import { getPokemon, getPokeInfo } from '../apis/apiClient'

export const SET_POKEMON = 'SET_POKEMON'
export const SET_HP = 'SET_HP'
export const SET_MY_DEF = 'SET_MTY_DEF'

export function setPokemon(pokemon) {
  return {
    type: SET_POKEMON,
    payload: pokemon,
  }
}

export function fetchPokemon() {
  return (dispatch) => {
    return getPokemon().then((pokemon) => {
      dispatch(setPokemon(pokemon))
      return null
    })
  }
}

export function setPokeHp(attack, pokemon) {
  return {
    type: SET_HP,
    payload: attack,
    pokemon,
  }
}

export function setMyDef(defense, pokemon) {
  return {
    type: SET_MY_DEF,
    payload: defense,
    pokemon,
  }
}
