import { db } from "../config/FirebaseConfig";
import { ref, onValue, update } from "firebase/database";

export const getDeviceData = (dispatch, updateDeviceData, showNotification, Vibration) => {



    onValue(ref(db, `Data/`), (snapshot) => {
        const data = snapshot.val();
        const { temperature, humidity, vibration, high_temp_threshold, low_temp_threshold, high_humi_threshold, low_humi_threshold, alarm } = data;
        dispatch(updateDeviceData(data))

        if (alarm == 1) {
            if (temperature < low_temp_threshold || temperature > high_temp_threshold || humidity < low_humi_threshold || humidity > high_humi_threshold || vibration == 1) {
                showNotification(temperature, humidity, vibration, high_temp_threshold, low_temp_threshold, high_humi_threshold, low_humi_threshold)
                Vibration.vibrate(100)
            }

            /* set alarm to zero */
            update(ref(db, `Data/`), {
                alarm: 0
            })
        }

    });
}