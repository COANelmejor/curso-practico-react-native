import { View, Text } from 'react-native'
import React from 'react'

import UserData from '../components/Auth/UserData'
import LoginForm from '../components/Auth/LoginForm.js'

export default function AccountScreen() {
  const auth = null

  return (
    <View>
      { auth ? <UserData /> : <LoginForm/>}
    </View>
  )
}
