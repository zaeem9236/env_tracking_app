import { auth } from "../../Firebase/config/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createDBTemplate } from "./createDBTemplate";

export const registerUser = (formData, navigation) => {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((e) => {
            let uid = e.user.uid;
            createDBTemplate(uid, formData);
            navigation.navigate('MainScreen');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

}