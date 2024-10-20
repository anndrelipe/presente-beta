import express from "express";
import cors from "cors";
import appRouter from "../routes/Routes.js";

const app = express();
app.use(cors());
app.use(express(), appRouter);

app.get("/", (req, res) => {
    res.send("FUNCIONANDO");
});

export default app