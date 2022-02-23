import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';
import { Input } from 'react-native-elements';
import { updateNumber } from '../../Firebase/functions/updateNumber';


const UpdateNumberScreen = () => {
  let deviceData = useSelector(getDeviceData);
  let [number1, setNumber1] = useState(`${deviceData.number1}`);
  let [number2, setNumber2] = useState(`${deviceData.number2}`);
  
  return (
    <View style={styles.mainContainer}>
      <Input
        label='Primary SMS number'
        labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
        placeholder='123*******'
        inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
        containerStyle={{ width: '90%' }}
        value={number1}
        keyboardType='numeric'
        onChangeText={(e) => {  setNumber1(e) }}
      />

      <Input
        label='Secondary SMS number'
        labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
        placeholder='678*******'
        inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
        containerStyle={{ width: '90%' }}
        value={number2}
        keyboardType='numeric'
        onChangeText={(e) => { setNumber2(e) }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => { updateNumber(number1, number2) }}>
          <Text style={styles.loginButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UpdateNumberScreen

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: 'red',
    flex: 0.6,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButton: {
    width: '85%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(1,87,155,1)',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22
  }
})