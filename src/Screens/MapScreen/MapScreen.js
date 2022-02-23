import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, Polygon } from 'react-native-maps';
import { useSelector } from 'react-redux';
import { getDeviceData } from '../../Redux/Slices/deviceDataSlice';


const MapScreen = () => {
    let deviceData = useSelector(getDeviceData);

    let region = {
        latitude: deviceData.lat,
        longitude: deviceData.lon,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    };


    return (
        <View style={styles.mainContainer}>
            <MapView style={styles.map} region={region}>
                <Marker
                    coordinate={{ latitude: deviceData.lat, longitude: deviceData.lon }}
                    title={'Current location'}
                    // description={'abc'}
                    pinColor='rgba(1, 87, 155, 1)'
                />

                <MapView.Circle
                    center={{
                        latitude: deviceData.lat,
                        longitude: deviceData.lon,
                    }}
                    radius={200}
                    strokeWidth={2}
                    strokeColor="rgba(255, 0, 0, 1)"
                    fillColor="rgba(155, 0, 0, 0.1)"
                />

            </MapView>

        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    mainContainer: {
        // backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        height: '90%',
        width: '100%',
    }
})