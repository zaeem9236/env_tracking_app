import { db } from "../config/FirebaseConfig";
import { ref, onValue } from "firebase/database";

export const getDeviceData = (dispatch, updateDeviceData, showNotification, Vibration) => {



    onValue(ref(db, `Data/`), (snapshot) => {
        const data = snapshot.val();
        const { temperature, humidity, vibration, high_temp_threshold, low_temp_threshold, high_humi_threshold, low_humi_threshold } = data;
        dispatch(updateDeviceData(data))


        // if (temperature < low_temp_threshold || temperature > high_temp_threshold || humidity < low_humi_threshold || humidity > high_humi_threshold || vibration == 1) {
        //     showNotification(temperature, humidity, vibration)
        //     // Vibration.vibrate(80)
        // }

    });


    onValue(ref(db, `Data/temperature`), (snapshot) => {
        console.log('observer trig')
    });

}