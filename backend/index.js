import "dotenv/config"
import app from "./src/config/app.js"

const PORT = 8000;
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
    console.log("Server listen on http://"+HOST+":"+PORT);
});