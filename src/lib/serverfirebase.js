
import { initializeApp } from './exports.js'
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLiIG-mqxEMpz8pffvS-SwGUv61D1erd8",
  authDomain: "burger-queen---pirateria.firebaseapp.com",
  projectId: "burger-queen---pirateria",
  storageBucket: "burger-queen---pirateria.appspot.com",
  messagingSenderId: "285880217745",
  appId: "1:285880217745:web:c462572d93fa57257a4f30",
  measurementId: "G-CZDRB5607G"
};


export const firebaseApp = initializeApp(firebaseConfig);

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
