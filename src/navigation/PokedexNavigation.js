import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import PokedexScreen from '../screens/Pokedex';
import PokemonScreen from '../screens/Pokemon';

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Pokedex'
        component={PokedexScreen}
        options={{ headerShown: false, title: 'Pokedex' }}
      />
      <Stack.Screen
        name='Pokemon'
        component={PokemonScreen}
        options={{ title: 'Pokemon' }}
      />
    </Stack.Navigator>
  )
}
