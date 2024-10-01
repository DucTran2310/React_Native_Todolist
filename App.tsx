import React from 'react'
import { StatusBar } from 'react-native'
import HomeScreen from './src/home/HomeScreen'

const App = () => {
  return (
    <>
      <StatusBar 
        translucent
        barStyle={'light-content'}
        backgroundColor='transparent'
      />
      <HomeScreen />
    </>
  ) 
} 

export default App
 