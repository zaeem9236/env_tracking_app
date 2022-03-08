import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';
import { Input, Switch } from 'react-native-elements';
import { updateNumber } from '../../Firebase/functions/updateNumber';
import RNE_Slider from '../../Components/RNE_Slider/RNE_Slider';


const UpdateNumberScreen = () => {
  let deviceData = useSelector(getDeviceData);
  let [number1, setNumber1] = useState(`${deviceData.number1}`);
  let [number2, setNumber2] = useState(`${deviceData.number2}`);
  let [highTemp, setHighTemp] = useState(`${deviceData.high_temp_threshold}`);
  let [highHumi, setHighHumi] = useState(`${deviceData.high_humi_threshold}`);

  let [alarm_s, setAlarm_s] = useState(`${deviceData.alarm_s}`);


  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Input
          label='Phone# 1'
          labelStyle={{ paddingBottom: '2%', paddingLeft: '1%' }}
          placeholder='123*******'
          inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
          containerStyle={{ width: '90%' }}
          value={number1}
          keyboardType='numeric'
          onChangeText={(e) => { setNumber1(e) }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          label='Phone# 2'
          labelStyle={{ paddingBottom: '2%', paddingLeft: '1%' }}
          placeholder='678*******'
          inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
          containerStyle={{ width: '90%' }}
          value={number2}
          keyboardType='numeric'
          onChangeText={(e) => { setNumber2(e) }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Input
          label={`High Temperature   (${deviceData.high_temp_threshold})`}
          labelStyle={{ paddingBottom: '2%', paddingLeft: '1%' }}
          placeholder='High Temperature'
          inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
          containerStyle={{ width: '90%' }}
          value={`${highTemp}`}
          keyboardType='numeric'
          onChangeText={(e) => { setHighTemp(e) }}
        />
        {/* <RNE_Slider label='High temperature' dbKey='high_temp_threshold' value={deviceData.high_temp_threshold} /> */}
      </View>

      <View style={styles.inputContainer}>
        <Input
          label={`High humidity   (${deviceData.high_humi_threshold})`}
          labelStyle={{ paddingBottom: '2%', paddingLeft: '1%' }}
          placeholder='High humidity'
          inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
          containerStyle={{ width: '90%' }}
          value={`${highHumi}`}
          keyboardType='numeric'
          onChangeText={(e) => { setHighHumi(e) }}
        />
      </View>

      <View style={{ flex: 0.04, flexDirection : 'row',justifyContent: 'center', alignItems: 'center' }}>
        <Text>Alarm_s</Text>
        <Switch
          value={alarm_s == 1 ? true: false}
          onValueChange={(value) => setAlarm_s(value? '1' : '0')}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => { updateNumber(number1, number2, highTemp, highHumi, alarm_s) }}>
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
    flex: 1,
    // justifyContent: 'space-around',
    // alignItems: 'center'
  },
  inputContainer: {
    // backgroundColor: 'purple',
    flex: 0.17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttonContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    flex: 0.15,
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