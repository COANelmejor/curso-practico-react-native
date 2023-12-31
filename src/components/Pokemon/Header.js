import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, Platform } from 'react-native';
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Header(props) {
  const { name, order, image, type, secondType } = props;
  console.log('type', type, secondType)

  const color = getColorByPokemonType(type);
  const bgStyles = [{...styles.bg, backgroundColor: color}]
  if (secondType) {
    const secondColor = getColorByPokemonType(secondType);
    bgStyles[0].height = Platform.OS === 'android' ? 175 : 200;
    bgStyles.push({...styles.bg2, backgroundColor: secondColor })
  }
  return (
    <>
      {secondType && <View style={bgStyles[1]} />}
      <View style={bgStyles[0]} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    top: 0,
    width: '100%',
    height: Platform.OS === 'android' ? 300 : 325,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  bg2: {
    top: 0,
    width: '100%',
    height: Platform.OS === 'android' ? 300 : 325,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 3 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 40,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
    textTransform: 'capitalize',
  },
  order: {
    color: 'white',
    fontWeight: 'bold',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
})
