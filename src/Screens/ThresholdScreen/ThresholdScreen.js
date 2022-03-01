import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';
import RNE_Slider from '../../Components/RNE_Slider/RNE_Slider';


const ThresholdScreen = () => {
    let deviceData = useSelector(getDeviceData);



    return (
        <View style={styles.mainContainer}>
            <View style={styles.sliderContainer} >
                <RNE_Slider label='High temperature' dbKey='high_temp_threshold' value={deviceData.high_temp_threshold} />
            </View>

            <View style={styles.sliderContainer} >
                <RNE_Slider label='Low temperature' dbKey='low_temp_threshold' value={deviceData.low_temp_threshold} />
            </View>

            <View style={styles.sliderContainer} >
                <RNE_Slider label='High humidity' dbKey='high_humi_threshold' value={deviceData.high_humi_threshold} />
            </View>

            <View style={styles.sliderContainer} >
                <RNE_Slider label='Low humidity'  dbKey='low_humi_threshold' value={deviceData.low_humi_threshold} />
            </View>
        </View>
    )
}

export default ThresholdScreen

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'pink',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    sliderContainer:{
        // backgroundColor : 'purple',
        flex: 0.2,
        width: '75%',
        justifyContent: 'center'
    }
})