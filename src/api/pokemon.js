import { API_URL_POKEAPI } from "../utils/constants";

export async function getPokemonsApi () {
  try {
    const url = `${API_URL_POKEAPI}/pokemon?limit=20&offset=0`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }

}
