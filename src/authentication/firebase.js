import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKWc5NYTSitvOpXdWzLo34_f_tWi_LzZo",
  authDomain: "forceconnect-e59d2.firebaseapp.com",
  projectId: "forceconnect-e59d2",
  storageBucket: "forceconnect-e59d2.appspot.com",
  messagingSenderId: "1079395393490",
  appId: "1:1079395393490:web:e0a3b30b0ab010f44c320b",
  measurementId: "G-7BZXS7TJCK",
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
