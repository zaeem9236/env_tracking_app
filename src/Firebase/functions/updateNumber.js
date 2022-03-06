import { db } from "../config/FirebaseConfig";
import { ref, update } from "firebase/database";


export const updateNumber = (number1, number2, highTemp, highHumi, alarm_s) => {
    update(ref(db, `Data/`), {
        number1: number1
    })

    update(ref(db, `Data/`), {
        number2: number2
    })

    update(ref(db, `Data/`), {
        high_temp_threshold: highTemp
    })

    update(ref(db, `Data/`), {
        high_humi_threshold: highHumi
    })

    update(ref(db, `Data/`), {
        alarm_s: alarm_s
    })
}