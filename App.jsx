
import { StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigation from './src/navigator/tabNavigation'
const App = () => {
  return (
    <SafeAreaProvider>
      <TabNavigation />
    </SafeAreaProvider>
  )
}
export default App

const styles = StyleSheet.create({})