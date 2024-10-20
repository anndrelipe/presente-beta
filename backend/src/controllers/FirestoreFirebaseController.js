import { doc, getDoc } from "firebase/firestore";
import db from "../services/Firestore.js";

class FirestoreFirebaseController {
    static async getImageData (req, res) {

        const collection = req.params.collection;
        const id = req.params.id;

        const docRef = doc(db, collection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            return res.status(200).json({status: 200, message: "Ok", data: docSnap.data()});
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}

export default FirestoreFirebaseController