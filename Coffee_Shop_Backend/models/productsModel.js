import mongoose from "../config/mongooseConfig.js";

//User Schema
const {Schema} = mongoose;

const productSchema = new Schema({
    pname: {
        type: String
    },
    pid: {
        type: String
    }
});

//UserModel
const productModel = new mongoose.model("products", productSchema);

export default productModel;