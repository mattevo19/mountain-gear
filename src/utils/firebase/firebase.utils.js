// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHyOEzw2R__3Bb2B7u1FH-_UnA3UB5SPU",
  authDomain: "mountain-gear-69.firebaseapp.com",
  projectId: "mountain-gear-69",
  storageBucket: "mountain-gear-69.appspot.com",
  messagingSenderId: "940771872648",
  appId: "1:940771872648:web:9018158836b5faa539343d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
