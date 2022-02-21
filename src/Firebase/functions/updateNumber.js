import { db } from "../config/FirebaseConfig";
import { ref, update } from "firebase/database";


export const updateNumber = (number1, number2) => {
    update(ref(db, `Data/`), {
        number1: number1
    })

    update(ref(db, `Data/`), {
        number2: number2
    })
}