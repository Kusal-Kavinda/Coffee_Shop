import mongoose from "../config/mongooseConfig.js";

//User Schema
const {Schema} = mongoose;

const userSchema = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    age: {
        type: Number
    }
});

//User Model
const userModel = new mongoose.model("user", userSchema);

export default userModel;