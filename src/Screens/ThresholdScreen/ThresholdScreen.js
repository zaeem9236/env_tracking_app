import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';
import RNE_Slider from '../../Components/RNE_Slider/RNE_Slider';
import { Input } from 'react-native-elements';
import { updateThreshold } from '../../Firebase/functions/updateThreshold';


const ThresholdScreen = () => {
    let deviceData = useSelector(getDeviceData);



    return (
        <View style={styles.mainContainer}>
            <View style={styles.sliderContainer} >
                <Input
                    label={`High Temperature   (${deviceData.high_temp_threshold})`}
                    labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
                    placeholder='High Temperature'
                    inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
                    containerStyle={{ width: '100%' }}
                    value={`${deviceData.high_temp_threshold}`}
                    keyboardType='numeric'
                    onChangeText={(e) => { updateThreshold('high_temp_threshold', e) }}
                />
            </View>

            <View style={styles.sliderContainer} >
                <Input
                    label={`Low Temperature   (${deviceData.low_temp_threshold})`}
                    labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
                    placeholder='Low Temperature'
                    inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
                    containerStyle={{ width: '100%' }}
                    value={`${deviceData.low_temp_threshold}`}
                    keyboardType='numeric'
                    onChangeText={(e) => { updateThreshold('low_temp_threshold', e) }}
                />
            </View>

            <View style={styles.sliderContainer} >
                <Input
                    label={`High humidity   (${deviceData.high_humi_threshold})`}
                    labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
                    placeholder='High humidity'
                    inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
                    containerStyle={{ width: '100%' }}
                    value={`${deviceData.high_humi_threshold}`}
                    keyboardType='numeric'
                    onChangeText={(e) => { updateThreshold('high_humi_threshold', e) }}
                />
            </View>

            <View style={styles.sliderContainer} >
                <Input
                    label={`Low humidity   (${deviceData.low_humi_threshold})`}
                    labelStyle={{ paddingBottom: '3%', paddingLeft: '1%' }}
                    placeholder='Low humidity'
                    inputContainerStyle={{ paddingLeft: '3%', borderColor: 'rgba(0,0,0,0.6)', borderWidth: 1, borderBottomWidth: 1, borderRadius: 10 }}
                    containerStyle={{ width: '100%' }}
                    value={`${deviceData.low_humi_threshold}`}
                    keyboardType='numeric'
                    onChangeText={(e) => { updateThreshold('low_humi_threshold', e) }}
                />
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
    sliderContainer: {
        // backgroundColor : 'purple',
        flex: 0.2,
        width: '90%',
        justifyContent: 'center'
    }
})