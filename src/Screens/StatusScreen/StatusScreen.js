import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';

const StatusScreen = () => {
    let deviceData = useSelector(getDeviceData);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.environmentContainer}>
                <View style={styles.environmentView} >
                    <Text style={styles.environmentView_text}>Temperature</Text>
                    <Text style={styles.environmentView_data}>{`${deviceData.temperature} °C`}</Text>
                    <Text style={styles.environmentView_error}>{deviceData.temperature < 30 ? 'Low temperature !' : deviceData.temperature > 40 ? 'High temperature !' : null}</Text>
                </View>

                <View style={styles.environmentView}>
                    <Text style={styles.environmentView_text}>Humidity</Text>
                    <Text style={styles.environmentView_data}>{`${deviceData.humidity} %`}</Text>
                    <Text style={styles.environmentView_error}>{deviceData.humidity < 40 ? 'Low humidity !' : deviceData.humidity > 80 ? 'High humidity !' : null}</Text>

                </View>
            </View>

            <View style={styles.vibrationContainer}>
                <View>
                    <Text style={styles.vibrationText}>Vibration Status:
                        <Text style={styles.vibrationAlarmText((deviceData.vibration == '1') ? '1' : '0')}>   {(deviceData.vibration == '0') ? 'no alarm' : 'alarm detected !'} </Text>
                    </Text>

                </View>
            </View>
        </View>
    )
}

export default StatusScreen

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'red',
        flex: 1
    },
    environmentContainer: {
        // backgroundColor: 'pink',
        flex: 0.4,
        flexDirection: 'row'
    },
    environmentView: {
        // backgroundColor: 'yellow',
        borderBottomWidth: 0.2,
        borderTopWidth: 0,
        borderColor: 'rgba(1, 87, 155, 1)',
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    environmentView_text: {
        fontSize: 20,
        color: 'rgba(1, 87, 155, 0.8)'
    },
    environmentView_data: {
        fontSize: 50,
        color: 'rgba(1, 87, 155, 0.8)'
    },
    environmentView_error: {
        fontSize: 15,
        color: 'red'
    },
    vibrationContainer: {
        // backgroundColor: 'green',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: '5%'
    },
    vibrationText: {
        fontSize: 20,
        color: 'rgba(1, 87, 155, 0.8)'
    },
    vibrationAlarmText: function (status) {
        return {
            fontSize: 20,
            color: status == '0' ? '#4caf50' : '#d32f2f'
        }
    }

})