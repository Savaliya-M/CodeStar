// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRXtigY9UYlZpwB2gYPRmWQ3oehoY9weY",
  authDomain: "codestar-7aea6.firebaseapp.com",
  projectId: "codestar-7aea6",
  storageBucket: "codestar-7aea6.appspot.com",
  messagingSenderId: "408649821203",
  appId: "1:408649821203:web:6679fbc187014fc68223e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
