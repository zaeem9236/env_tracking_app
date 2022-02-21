import { db } from "../config/FirebaseConfig";
import { ref, set } from "firebase/database";


export const createDBTemplate = (uid, formData) => {
    set(ref(db, `Users/${uid}/`), {
        name: formData.name,
        email: formData.email,
        enterKey: formData.password,
        role: 'user'
    });
}