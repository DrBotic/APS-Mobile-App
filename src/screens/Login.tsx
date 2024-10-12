// Use Case: 
// 1. APS sends email to user with username and password (which is the generator key).
// 2. User enters info and clicks login.

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
        <Header/>
        <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})