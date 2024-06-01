/* import mongoose from "../config/mongooseConfig.js";

//Coffee Schema
const {Schema} = mongoose;

const priceSchema = new Schema(
    {
        size: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    },
    { _id: false } // Disable _id for subdocuments
);

const coffeeSchema = new Schema(
    {
        name: { type: String, required: true },
        prices: [priceSchema],
        coffeeId: { type: String, required: true }
    },
    {
        collection: "coffee",
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Coffee Model
const coffeeModel = new mongoose.model("coffee", coffeeSchema);

export default coffeeModel; */