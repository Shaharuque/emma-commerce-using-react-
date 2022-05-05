// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNkLz2w71xr4fTUEYHc0pyiCAAuUNWyrc",
  authDomain: "ema-jhon-simple-87335.firebaseapp.com",
  projectId: "ema-jhon-simple-87335",
  storageBucket: "ema-jhon-simple-87335.appspot.com",
  messagingSenderId: "15057226182",
  appId: "1:15057226182:web:fbf38de7ec7ef742258ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export default auth