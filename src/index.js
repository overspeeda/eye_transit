// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_eTOtg0_fQnBOz4QmAXM8SlHRFAcvhjY",
  authDomain: "bus-track-361306.firebaseapp.com",
  databaseURL: "https://bus-track-361306-default-rtdb.firebaseio.com",
  projectId: "bus-track-361306",
  storageBucket: "bus-track-361306.appspot.com",
  messagingSenderId: "745565483285",
  appId: "1:745565483285:web:debb0cf39cf5943a6df91c",
  measurementId: "G-G9RDY4EEQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);