import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from './firebaseConfig'

const provider = new GoogleAuthProvider();
export const loginWithGoogle = () =>signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    console.log(credential)
    }).catch((error) => {
    console.log(error)
    });
  
export const logout=()=>signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
  });