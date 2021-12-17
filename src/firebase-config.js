import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLavbLp4twCTK681HK47RwmIB8mahkrpk",
    authDomain: "crud-app-de9bd.firebaseapp.com",
    databaseURL: "https://crud-app-de9bd-default-rtdb.firebaseio.com",
    projectId: "crud-app-de9bd",
    storageBucket: "crud-app-de9bd.appspot.com",
    messagingSenderId: "792790443462",
    appId: "1:792790443462:web:8be1e04049deeba2bd7ec7",
    measurementId: "G-N8C70RSLW6"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };