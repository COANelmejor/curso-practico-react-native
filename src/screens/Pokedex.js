import { SafeAreaView, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsByUrlApi } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })();
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl)
      const pokemonsArray = []
      setNextUrl(response.next)

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          image: pokemonDetail.sprites.other['official-artwork'].front_default,
          order: pokemonDetail.order,
          type: pokemonDetail.types[0].type.name,
        })
      }
      setPokemons([...pokemons, ...pokemonsArray])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl}/>
    </SafeAreaView>
  )
}
