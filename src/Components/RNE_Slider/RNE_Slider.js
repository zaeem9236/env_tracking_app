import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slider, Icon } from 'react-native-elements';
import { updateThreshold } from '../../Firebase/functions/updateThreshold';


const RNE_Slider = ({ label, dbKey, value }) => {
  return (
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.labelText}>{label}</Text>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <Slider
        value={parseInt(value)}
        onValueChange={(e) => updateThreshold(dbKey, e)}
        maximumValue={100}
        minimumValue={0}
          // step={1}
        //   orientation="vertical"
        thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="circle"
              type="font-awesome"
              size={10}
              reverse
              containerStyle={{ bottom: 10, right: 10 }}
              color="rgb(1, 87, 155)"
            />
          ),
        }}
        maximumTrackTintColor='rgba(0, 0, 0, 0.3)'
        minimumTrackTintColor='rgb(1, 87, 155)'
      />
    </View>
  )
}

export default RNE_Slider

const styles = StyleSheet.create({
  infoContainer:{
    flexDirection: 'row',
    paddingBottom: '5%',
    justifyContent: 'space-between'
  },
  labelText:{

  },
  valueText:{
    // paddingLeft: '8%',
    color: 'rgb(1, 87, 155)',
  }
})