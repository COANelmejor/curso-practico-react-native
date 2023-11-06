import { API_URL_POKEAPI } from "../utils/constants";

const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

export async function getPokemonsApi (nextUrl) {
  try {
    const url = nextUrl || `${API_URL_POKEAPI}/pokemon?limit=20&offset=0`
    const response = await fetch(url, defaultOptions)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }

}

export async function getPokemonDetailsByUrlApi (url) {
  try {
    const response = await fetch(url, defaultOptions)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}
