import axios from 'axios'

const URL = 'https://pokeapi.co/api/v2'

const getPokemonsName = () => axios.get(`${URL}/pokemon?limit=1000&offset=0`)

const getDataPokemon = id => axios.get(`${URL}/pokemon/${id}`)

const getTypesPokemon = ind => axios.get(`${URL}/type/${ind}`)

const getGenderPokemon = ind => axios.get(`${URL}/gender/${ind}`)

export default {
  getPokemonsName,
  getDataPokemon,
  getTypesPokemon,
  getGenderPokemon,
}
