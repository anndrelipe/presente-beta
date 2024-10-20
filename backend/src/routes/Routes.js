import { Router } from "express";
import StorageFirebaseController from "../controllers/StorageFirebaseController.js";
import FirestoreFirebaseController from "../controllers/FirestoreFirebaseController.js";

const appRouter = Router();

appRouter.get("/get-image/:name", StorageFirebaseController.receiveUrlImage);
appRouter.get("/get-imageData/:collection/:id", FirestoreFirebaseController.getImageData);

export default appRouter