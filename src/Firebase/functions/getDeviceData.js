import { db } from "../config/FirebaseConfig";
import { ref, onValue } from "firebase/database";

export const getDeviceData = (dispatch, updateDeviceData, showNotification, Vibration) => {
    onValue(ref(db, `Data/`), (snapshot) => {
        const data = snapshot.val();
        const { temperature, humidity, vibration } = data;
        dispatch(updateDeviceData(data))
        if (temperature < 30 || temperature > 40 || humidity < 40 || humidity > 80 || vibration == 1)
            showNotification(temperature, humidity, vibration)
            Vibration.vibrate(80)
    });
}