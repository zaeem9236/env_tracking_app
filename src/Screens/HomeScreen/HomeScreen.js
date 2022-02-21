import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux';
import { countUp, countDown, getCount } from '../../Redux/Slices/CountDownSlice';

import { logOut } from '../../Firebase/functions/logOut';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
  let [selectedIndex, setSelectedIndex] = useState(0)
  let dispatch = useDispatch();
  return (
    <View style={styles.mainContainer(windowHeight)}>
      <View style={styles.topDashboardContainer}>
        <View style={styles.topRow}>
          <Text style={styles.topRow_heading}>{`Welcome user`}</Text>
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
        <View style={styles.environmentContainer}>
          <View style={styles.environmentView1}>
            <Text>temp</Text>
          </View>
          <View style={styles.environmentView2}><Text>humi</Text></View>
        </View>
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
    backgroundColor: 'red',
    flex: 0.8,
  },
  environmentContainer: {
    backgroundColor: 'pink',
    flex: 0.4,
    flexDirection: 'row'
  },
  environmentView1: {
    backgroundColor: 'yellow',
    flex: 0.5
  },
  environmentView2: {
    backgroundColor: 'green',
    flex: 0.5
  }

})