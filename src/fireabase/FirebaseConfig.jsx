// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };

const firebaseConfig = {
  apiKey: "AIzaSyA7aMgo9HeNMTzA1GG2D8t3hIOQAWRJNu4",
  authDomain: "afsalecom-78c60.firebaseapp.com",
  projectId: "afsalecom-78c60",
  storageBucket: "afsalecom-78c60.firebasestorage.app",
  messagingSenderId: "740046546525",
  appId: "1:740046546525:web:866d753cca257346cc0fb4",
  measurementId: "G-3XWLMEGT0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}