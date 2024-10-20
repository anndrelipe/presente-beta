import firebaseClient from './FirebaseClient.js'
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebaseClient);

export default db;