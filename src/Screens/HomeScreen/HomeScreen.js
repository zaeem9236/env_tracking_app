import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../Redux/Slices/userDetailsSlice';
import { getDeviceData as iotData } from '../../Redux/Slices/deviceDataSlice';
import { updateDeviceData } from '../../Redux/Slices/deviceDataSlice';
import StatusScreen from '../StatusScreen/StatusScreen';
import UpdateNumberScreen from '../UpdateNumberScreen/UpdateNumberScreen';
import MapScreen from '../MapScreen/MapScreen';
import { getDeviceData } from '../../Firebase/functions/getDeviceData';
import { logOut } from '../../Firebase/functions/logOut';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';

import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  let [selectedIndex, setSelectedIndex] = useState(0)
  let userInfo = useSelector(getUserDetails);
  let { temperature, humidity, vibration } = useSelector(iotData);
  let dispatch = useDispatch();

  if (temperature < 30 || temperature > 40 || humidity < 40 || humidity > 80 || vibration == 1)
  showNotification(temperature, humidity, vibration)


  useEffect(() => {
    getDeviceData(dispatch, updateDeviceData)


  }, [])

  return (
    <Root>
      <View style={styles.mainContainer(windowHeight)}>
        <View style={styles.topDashboardContainer}>
          <View style={styles.topRow}>
            <Text style={styles.topRow_heading}>{`Welcome ${userInfo.name}`}</Text>
            <TouchableOpacity style={styles.topRow_button} onPress={() => { logOut(navigation) }}>
              <Text style={styles.topRow_buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.screenSelectRow}>
            <ButtonGroup
              buttons={['Status', 'Update Number', 'Gps']}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
              containerStyle={{ marginBottom: 0 }}
              selectedButtonStyle={{ backgroundColor: 'rgb(1, 87, 155)' }}
            />
          </View>
        </View>

        <View style={styles.appScreen}>

          {(selectedIndex === 0) ? <StatusScreen /> : (selectedIndex === 1) ? <UpdateNumberScreen /> : <MapScreen />}

        </View>


      </View>
    </Root>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: function (windowHeight) {
    return {
      height: windowHeight
    }
  },
  topDashboardContainer: {
    // backgroundColor: 'red',
    flex: 0.2,
  },
  topRow: {
    // backgroundColor: 'green',
    flexDirection: 'row',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 0.5,
  },
  topRow_heading: {
    fontSize: 20,
    color: 'rgb(1, 87, 155)'
  },
  topRow_button: {

  },
  topRow_buttonText: {
    fontSize: 18,
    color: 'rgba(255, 0, 0, 0.7)'
  },
  screenSelectRow: {
    // backgroundColor: 'yellow',
    flex: 0.5,
    justifyContent: 'flex-end',
  },
  appScreen: {
    // backgroundColor: 'red',
    flex: 0.8,
  }

})



function showNotification(temperature, humidity, vibration) {
  Toast.show({
    autoClose: 5000,
    type: ALERT_TYPE.WARNING,
    title: 'Notification',
    textBody: `${temperature>40? 'High temperature !\r\n' : temperature<30? 'Low temperature !\r\n' : ''}${humidity>80? 'High humidity !\r\n' : temperature<40? 'Low humidity !\r\n' : ''}${vibration ==1? 'Vibration detected !' : ''}`,
    onPress: ()=>{  Toast.hide() }
  })
}
