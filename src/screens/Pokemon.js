import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';
import { getPokemonDetailsApi } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from "react-native-vector-icons/FontAwesome"

export default function PokemonScreen(props) {
  const {
    navigation,
    route: {
      params
    }
  } = props;
  const [pokemon, setPokemon] = useState(null)

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => {
       return (<Icon
          name="arrow-left"
          size={20}
          color="#FFF"
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />)

      },
    })
  }, [navigation, pokemon])

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
        secondType={pokemon.types[1] ? pokemon.types[1].type.name : null}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}
