import React, { useState, useEffect } from 'react'
import { getPokemon, getPokeInfo } from '../apis/apiClient'
import { useDispatch } from 'react-redux'
import { saveDbTeam } from '../actions/myPokemon'
import Team from './Team'
import Pokemon from './Pokemon'
const clickPop = new Audio('clickConf.mp3')
const homeTheme = new Audio('homeTheme.mp3')

import TextField from '@mui/material/TextField'

export default function Home(props) {
  const [pageList, setPokemonList] = useState([])
  const [pageLimit] = useState(151)
  const [pokeDex, setPokeDex] = useState([])
  const [team, setTeam] = useState([])
  const [volume, setVolume] = useState('0.2')
  const dispatch = useDispatch()
  const mapToggle = props.fn
  const [inputText, setInputText] = useState('')

  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }
  function themeSongPlay() {
    homeTheme.volume = 0.2
    homeTheme.currentTime = 0
    homeTheme.play()
  }

  useEffect(() => {
    themeSongPlay()
    homeTheme.volume = volume
  }, [])

  useEffect(() => {
    getPokemon(pageLimit)
      .then((list) => {
        setPokemonList(list.results)
        return list.results
      })
      .then((pokemonNames) => {
        const pokeInfo = pokemonNames.map((poke) => {
          return getPokeInfo(poke.name)
        })

        return Promise.all(pokeInfo)
      })
      .then((pokeData) => {
        const pokeDexTest = pokeData.map((poke, index) => {
          const test = { ...pageList[index], ...poke }
          return test
        })
        setPokeDex(pokeDexTest)
      })

      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  function setPokemon(pokemon) {
    let tempTeam = [...team]
    if (team.length < 6) {
      tempTeam.push(pokemon)
      setTeam(tempTeam)
      clickPop.volume = 0.2
      clickPop.currentTime = 0
      clickPop.play()
    }
  }

  function restartTeam() {
    setTeam([])
    themeSongPlay()
  }

  function confirmTeam() {
    if (team.length != 0) {
      dispatch(saveDbTeam(team))
      mapToggle()
<<<<<<< HEAD

=======
>>>>>>> d941be5c9448b6bfe68e2612bec228486103ebf0
      homeTheme.pause()
    }
  }

  const filteredData = pokeDex.filter((el) => {
    if (inputText === '') {
      return el.name
    } else {
      return el.name.toLowerCase().includes(inputText)
    }
  })

  return (
    <div className="less-wide">
      <input
        type="range"
        min="0"
        max="100"
        onChange={(e) => setVolume((homeTheme.volume = e.target.value / 100))}
      ></input>

      <h1>Choose your Pokémon!</h1>
      <div className="select">
        <div className="selectTeam">
          <Team team={team} />
        </div>
        <div className="searchConfirm">
          <div className="confirmButtons">
            <button onClick={restartTeam}>Reset Team</button>
            <button onClick={confirmTeam}>Confirm Team</button>
          </div>
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Search by Pokémon name"
            />
          </div>
        </div>
      </div>
      <div className="selectionGrid">
        <div className="poke-list">
          {filteredData.map((pokemon, element) => (
            <div
              className="pokemon"
              key={pokemon.name + element}
              onClick={() => setPokemon(pokemon)}
            >
              <a>
                <Pokemon hoverData={pokemon} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
