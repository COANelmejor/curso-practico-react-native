import { StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonList(props) {
  const {
    pokemons,
    loadPokemons,
    isNext
  } = props

  const loadMorePokemons = () => {
    console.log("Cargando más pokemons");
    loadPokemons();
  }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => (<PokemonCard pokemon={item} />)}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && loadMorePokemons}
      onEndReachedThreshold={0.25}
      ListFooterComponent={
        isNext && <ActivityIndicator style={styles.spinner} size="large" color="#000" />
      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'ios' ? 5 : 10,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'ios' ? 80 : 60,
  }
})
