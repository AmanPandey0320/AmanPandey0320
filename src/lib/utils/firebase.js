import { initializeApp } from "firebase/app";
import {getAuth} from  "firebase/auth";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import config from "../config/firebase_config.json";

const app = initializeApp(config);
export default app;
export const db = getFirestore();
export const auth = getAuth();
