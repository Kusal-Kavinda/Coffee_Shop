import mongoose from "../config/mongooseConfig.js";

// Coffee Order Schema
const {Schema} = mongoose;

const coffeeOrderSchema = new Schema(
    {
        coffeeId: { type: String, required: true },
        size: { type: String, required: true },
        orderId: { type: Schema.Types.ObjectId, ref: "orderPayment", required: true }
    },
    {
        collection: "coffeeOrder",
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Coffee Order Model
const orderPaymentModel = new mongoose.model("coffeeOrder", coffeeOrderSchema);

export default orderPaymentModel;