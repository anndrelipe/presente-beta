import firebaseClient from './FirebaseClient.js'
import { getStorage, ref } from "firebase/storage";

const storage = getStorage(firebaseClient);

function criaStorageRef (fileName) {
    const storageRef = ref(storage, `imagens/${fileName}`)
    return storageRef
}

export default criaStorageRef