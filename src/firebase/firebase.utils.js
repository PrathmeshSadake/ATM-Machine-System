import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDG8wV1-JNr6lTDQhmp1w3p1w1EBSEav7Q",
  authDomain: "scuttle-5a334.firebaseapp.com",
  databaseURL: "https://scuttle-5a334.firebaseio.com",
  projectId: "scuttle-5a334",
  storageBucket: "scuttle-5a334.appspot.com",
  messagingSenderId: "962573994780",
  appId: "1:962573994780:web:72df8d4402e82fc9bc48d9",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;