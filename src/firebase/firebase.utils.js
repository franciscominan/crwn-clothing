import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdUr5Hhfu3K81gIYkICr1roEKUFApBzf0",
  authDomain: "crwn-db-58ace.firebaseapp.com",
  databaseURL: "https://crwn-db-58ace.firebaseio.com",
  projectId: "crwn-db-58ace",
  storageBucket: "crwn-db-58ace.appspot.com",
  messagingSenderId: "184472983630",
  appId: "1:184472983630:web:4afa676e91fca12e558b1f",
  measurementId: "G-EX73DEZLFZ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
