import mongoose from "../config/mongooseConfig.js";

//User Schema
const {Schema} = mongoose;

const userSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
});

//User Model
const userModel = new mongoose.model("user", userSchema);

export default userModel;