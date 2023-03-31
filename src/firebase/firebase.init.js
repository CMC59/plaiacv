import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase.config";

const initializeAuthentification = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentification;