import { SafeAreaView, Text } from 'react-native'
import { useState, useEffect } from 'react'
import { getPokemonsApi } from '../api/pokemon'

export default function PokedexScreen() {

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })();
  }, [])

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi()
      console.log(JSON.stringify(response, null, 2))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}
