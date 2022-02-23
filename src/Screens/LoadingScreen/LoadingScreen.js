import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';


const LoadingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <ActivityIndicator size={40} color="rgba(1, 87, 155, 0.8)" />
      <Text style={styles.LoadingText}>Loading</Text>
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
    fontSize: 20,
    color: 'rgba(1, 87, 155, 0.8)'
  }
})