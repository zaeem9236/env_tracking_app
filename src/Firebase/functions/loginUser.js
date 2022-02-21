import { auth } from "../../Firebase/config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getUserData } from "./getUserData";

export const loginUser = (email, password, navigation, setLoginErr, dispatch, updateUserDetails) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((e) => {
            let uid = e.user.uid;
            navigation.navigate('MainScreen');
            getUserData(uid, dispatch, updateUserDetails)
        })
        .catch((error) => {
            setLoginErr(error.code)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}