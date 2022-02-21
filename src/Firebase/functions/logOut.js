import { auth } from "../config/FirebaseConfig";
import { signOut } from "firebase/auth";

export const logOut = (navigation) => {
    signOut(auth).then(() => {
        navigation.navigate('LoginScreen')
    }).catch((error) => {
    });
}