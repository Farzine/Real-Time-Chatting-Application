import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA4lEQjQUrTHmBsyf-_pbq4ayBfCdgJrzY",
    authDomain: "real-time-chatting-appli-e2517.firebaseapp.com",
    projectId: "real-time-chatting-appli-e2517",
    storageBucket: "real-time-chatting-appli-e2517.appspot.com",
    messagingSenderId: "9969754729",
    appId: "1:9969754729:web:163fb47140f1b1152638f8",
    measurementId: "G-CBXM81EQWZ"
  };

    const app = initializeApp(firebaseConfig);
    export const firebaseAuth = getAuth(app);