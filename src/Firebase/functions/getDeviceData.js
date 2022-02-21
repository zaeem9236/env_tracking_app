import { db } from "../config/FirebaseConfig";
import { ref, onValue } from "firebase/database";


export const getDeviceData = ( dispatch, updateDeviceData ) => {
    onValue(ref(db, `Data/`), (snapshot) => {
        const data = snapshot.val();
        dispatch(updateDeviceData(data))
    });
}