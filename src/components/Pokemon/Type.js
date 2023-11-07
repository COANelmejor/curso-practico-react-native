import { StyleSheet, View, Text } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType';

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {types.map((item, index) => {

        return (
          <View key={index} style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name)
          }}>
            <Text style={styles.textPill}>{item.type.name}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  textPill: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})
