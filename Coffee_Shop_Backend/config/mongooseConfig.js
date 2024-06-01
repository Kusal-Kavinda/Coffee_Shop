import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const mongoURL = process.env.MONGO_URL;

//Mongoose connect
mongoose.connect(mongoURL)
.then(() => {
    console.log("Database Connected!")
})
.catch(err => console.log("Error connecting to database!", err))

export default mongoose;