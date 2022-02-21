import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../../Redux/Slices/userDetailsSlice';
import StatusScreen from '../StatusScreen/StatusScreen';
import UpdateNumberScreen from '../UpdateNumberScreen/UpdateNumberScreen';
import { logOut } from '../../Firebase/functions/logOut';
import { useNavigation } from '@react-navigation/native';

import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();
  let [selectedIndex, setSelectedIndex] = useState(0)
  let userInfo = useSelector(getUserDetails);
  let dispatch = useDispatch();
  return (
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
            buttons={['Status', 'Update Number']}
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
        
        {(selectedIndex === 0) ? <StatusScreen /> : <UpdateNumberScreen />}

      </View>


    </View>
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