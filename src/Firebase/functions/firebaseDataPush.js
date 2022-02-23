import { db } from "../config/FirebaseConfig";
import { ref, set } from "firebase/database";

export const firebaseDataPush = () => {
    set(ref(db, `testData/`), {
        randomNumber: Math.floor(Math.random() * 100)
    });
}