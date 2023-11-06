import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';

export default function PokemonScreen(props) {
  const {
    navigation,
    route: {
      params
    }
  } = props;
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        console.error(error)
        navigation.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
      <Text>{pokemon.id}</Text>
      <Text>{pokemon.height}</Text>
      <Text>{pokemon.weight}</Text>
      <Text>{pokemon.base_experience}</Text>
    </SafeAreaView>
  )
}
