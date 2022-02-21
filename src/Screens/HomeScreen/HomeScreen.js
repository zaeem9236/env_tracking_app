import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown, getCount } from '../../Redux/Slices/CountDownSlice';

import { logOut } from '../../Firebase/functions/logOut';
import { firebaseDataPush } from '../../Firebase/functions/firebaseDataPush';


const HomeScreen = ({ navigation }) => {
  let count = useSelector(getCount);
  let dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.counterButton} onPress={() => { dispatch(countUp()) }}>
          <Text style={styles.buttonText}>Up</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 40 }}>{count}</Text>

        <TouchableOpacity style={styles.counterButton} onPress={() => { dispatch(countDown()) }}>
          <Text style={styles.buttonText}>Down</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.button} onPress={() => { firebaseDataPush() }}>
          <Text style={styles.buttonText}>Firebase data push</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <TouchableOpacity style={styles.button} onPress={() => { logOut(navigation) }}>
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  section1: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  section2: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '85%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  counterButton: {
    width: '85%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(1,57,150,0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: 22
  }
})