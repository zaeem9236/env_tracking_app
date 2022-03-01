import { db } from "../config/FirebaseConfig";
import { ref, update } from "firebase/database";


export const updateThreshold = (dbKey, e) => {
    update(ref(db, `Data/`), {
        [`${dbKey}`]: e
    })
}