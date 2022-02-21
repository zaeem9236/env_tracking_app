import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Icon } from 'react-native-elements'

const StatusScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.environmentContainer}>
                <View style={styles.environmentView} >
                    <Text style={styles.environmentView_text}>Temperature</Text>
                    <Text style={styles.environmentView_data}>{`${32} °C`}</Text>
                    <Text style={styles.environmentView_error}>High temp !</Text>
                </View>

                <View style={styles.environmentView}>
                    <Text style={styles.environmentView_text}>Humidity</Text>
                    <Text style={styles.environmentView_data}>{`${63} %`}</Text>
                    <Text style={styles.environmentView_error}>Low humidity !</Text>

                </View>
            </View>

            <View style={styles.vibrationContainer}>
                <View>
                    <Text>Vibration Status :</Text>
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
        //    backgroundColor: 'green',
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    }

})