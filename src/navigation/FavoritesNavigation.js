import { SafeAreaView, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/Favorite';

const Stack = createStackNavigator();

export default function FavoritesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorites'
        component={FavoriteScreen}
        options={{ title: 'Favoritos' }}
      />
    </Stack.Navigator>
  )
}
