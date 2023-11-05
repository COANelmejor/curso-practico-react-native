import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome"
import { Image } from "react-native"

const Tab = createBottomTabNavigator()

import Account from "../screens/Account"
import Favorite from "../screens/Favorite"
import Pokedex from "../screens/Pokedex"

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Pokedex"
      screenOptions={{ headerShown: false }}>

      <Tab.Screen name="Favorite" component={Favorite} options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ focused, color }) => {
          const iconName = focused ? 'heart' : 'heart-o';
          return (
            <Icon name={iconName} color={color} size={20} />
          )
        }
      }} />

      <Tab.Screen name="Pokedex" component={Pokedex} options={{
        tabBarLabel: "",
        tabBarIcon: ({focused}) => renderPokeball(focused)
      }} />

      <Tab.Screen name="Account" component={Account} options={{
        tabBarLabel: "Mi Cuenta",
        tabBarIcon: ({ focused, color }) => {
          let iconName = focused ? 'user' : 'user-o';
          return (<Icon name={iconName} color={color} size={20} />)
        }
      }} />
    </Tab.Navigator>

  )
}

function renderPokeball (focused) {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 80, height: 80, top: focused ? -25 : -10, }}
    />
  )
}
