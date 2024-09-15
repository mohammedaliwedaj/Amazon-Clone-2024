// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// for authentication purpose
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEbbdNa-2FsH3ErQ3lhcTVmM-XutV9vc",
  authDomain: "clone-fda88.firebaseapp.com",
  projectId: "clone-fda88",
  storageBucket: "clone-fda88.appspot.com",
  messagingSenderId: "225577244332",
  appId: "1:225577244332:web:79dee49671c4fa24ee7109",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db =app.firestore()