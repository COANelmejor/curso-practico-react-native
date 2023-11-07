import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator initialRouteName='Pokedex'>
      <Stack.Screen
        name='Pokedex'
        component={PokedexScreen}
        options={{ title: '', headerShown: false }}
      />
      <Stack.Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}
