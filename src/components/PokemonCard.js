import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemonType'
import { useNavigation } from '@react-navigation/native'


export default function PokemonCard(props) {
  const {
    pokemon
  } = props

  const navigation = useNavigation()
  const colorType = getColorByPokemonType(pokemon.type)
  const bgStyles = {
    ...styles.bgStyles,
    backgroundColor: colorType
  }

  const goToPokemon = () => {
    navigation.navigate('Pokemon', { id: pokemon.id })
  }
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Image
              style={styles.image}
              source={{ uri: pokemon.image }}
            />
            <Text style={{...styles.name, textShadowColor: colorType}} >{pokemon.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 150,
    margin: '1%',
    borderRadius: 15,
    backgroundColor: '#FFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .8,
    shadowRadius: 3.84,
    elevation: 5,

  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: "#FFF",
    fontSize: 11,
    fontWeight: 'bold',
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: 10,
    left: 10,
    elevation: 5,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    paddingHorizontal: 5,
    
  },
  image: {
    width: 125,
    height: 125,
    position: 'absolute',
    bottom: 10,
    right: 20,
    resizeMode: 'contain',

  }
})
