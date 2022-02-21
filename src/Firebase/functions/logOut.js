import { auth } from "../config/FirebaseConfig";
import { signOut } from "firebase/auth";

export const logOut = (navigation) => {
    signOut(auth).then(() => {console.log('p')
        navigation.navigate('LoginScreen')
        console.log('sign out hua')
    }).catch((error) => {
        console.log(error)
    });
}