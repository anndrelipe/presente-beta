import "dotenv/config"
import app from "./src/config/app.js"

const PORT = 8000;
const HOST = "localhost";

app.listen(PORT, HOST, () => {
    console.log("Server listen on http://"+HOST+":"+PORT);
});