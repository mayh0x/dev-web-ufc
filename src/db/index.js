import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../keys/firebase";

const firebase = initializeApp(firebaseConfig);

const database = getFirestore(firebase);

export { database, firebase };
