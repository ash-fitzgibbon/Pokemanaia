import request from 'superagent'

export function getPokemon(limit) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon?&limit=${limit}`)
    .then((res) => {
      return res.body
    })
}

export function getPokeInfo(name) {
  return request
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      return res.body
    })
}
