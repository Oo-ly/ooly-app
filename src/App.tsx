import React from 'react'
import { registerRootComponent } from 'expo'
import { StyleSheet, Text, View, Button } from 'react-native'
import { Api } from './services/api/Api'
import { TEST } from 'react-native-dotenv'

const api = Api.getInstance()
api.getUser()

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! {TEST}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default registerRootComponent(App)
