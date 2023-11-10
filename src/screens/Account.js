import { View, Text } from 'react-native'
import React from 'react'

import UserData from '../components/Auth/UserData'
import LoginForm from '../components/Auth/LoginForm.js'

import useAuth from '../hooks/useAuth'

export default function AccountScreen() {
  const { auth } = useAuth()

  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}
