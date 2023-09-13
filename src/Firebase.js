import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxj64MXycHICa6baO50lrUfxI4ennf7X8",
    authDomain: "chat-app-84495.firebaseapp.com",
    projectId: "chat-app-84495",
    storageBucket: "chat-app-84495.appspot.com",
    messagingSenderId: "1083012808763",
    appId: "1:1083012808763:web:b98048dd1b20f91f85dc1e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword}