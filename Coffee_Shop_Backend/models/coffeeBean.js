import mongoose from "../config/mongooseConfig.js";

//Coffee Bean Schema
const {Schema} = mongoose;

const priceSchema = new Schema(
    {
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
        price: { type: Number, required: true }
    },
    { _id: false } // Disable _id for subdocuments
);

const coffeeBeanSchema = new Schema(
    {
        name: { type: String, required: true },
        prices: [priceSchema],
        beanId: { type: String, required: true }
    },
    {
        collection: "coffeeBean",
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Coffee Bean Model
const coffeeBeanModel = new mongoose.model("coffeeBean", coffeeBeanSchema);

export default coffeeBeanModel;