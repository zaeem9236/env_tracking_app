import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux';
import { getUserDetails } from '../../Redux/Slices/userDetailsSlice';
import HomeScreen from '../HomeScreen/HomeScreen';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


const MainScreen = ({ navigation }) => {
  let userDetails = useSelector(getUserDetails)

  switch (userDetails.role) {
    case 'user':
      return <HomeScreen />
      break;
    default:
      return <LoadingScreen />
  }
}

export default MainScreen;

const styles = StyleSheet.create({

})