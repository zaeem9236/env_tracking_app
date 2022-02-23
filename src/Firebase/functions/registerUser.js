import { auth } from "../../Firebase/config/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createDBTemplate } from "./createDBTemplate";
import { getUserData } from "./getUserData";

export const registerUser = (formData, navigation, dispatch, updateUserDetails) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((e) => {
            let uid = e.user.uid;
            createDBTemplate(uid, formData);
            navigation.navigate('MainScreen');
            getUserData(uid, dispatch, updateUserDetails)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}