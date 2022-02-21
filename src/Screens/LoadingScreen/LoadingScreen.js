import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const LoadingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.LoadingText}>Loading...</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoadingText: {
    fontSize: 20
  }
})