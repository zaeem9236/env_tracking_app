import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MapScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>MapScreen</Text>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})