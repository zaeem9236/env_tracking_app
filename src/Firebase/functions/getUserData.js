import { db } from "../config/FirebaseConfig";
import { ref, onValue } from "firebase/database";

export const getUserData = (uid, dispatch, updateUserDetails) => {
    onValue(ref(db, `Users/${uid}/`), (snapshot) => {
        const data = snapshot.val();
        dispatch(updateUserDetails(data))
    });
}