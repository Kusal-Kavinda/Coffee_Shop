import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";

dotenv.config();

const app = express()
const PORT = process.env.PORT;

app.use(express.json());
app.use("/", router);
app.use(cors());

app.listen(3000, () => {
    console.log(`Server is running at ${PORT}`);
});