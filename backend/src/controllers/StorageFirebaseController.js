import criaStorageRef from "../services/Storage.js";
import { uploadBytesResumable, getDownloadURL } from "firebase/storage";

class StorageFirebaseController {
    static async receiveUrlImage (req, res) {
        const image_name = req.params.name;

        if (!image_name) {
            res.status(400).json({status: 400, message: "Bad Request", content: "Nenhuma imagem foi definida para busca." + image_name});
            return
        }

        try {
            const pathRef = criaStorageRef(image_name);

            getDownloadURL(pathRef)
            .then((url) => {
                res.status(200).json({status: 200, message: "Ok", content: url});
            })

        } catch (error) {
            res.status(500).json({status: 500, message: "Internal Server Error", content: "Algo inesperado aconteceu no servidor."});
            return    
        }
    }
}

export default StorageFirebaseController