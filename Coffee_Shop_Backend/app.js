import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware before any routes are defined
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
});