import mongoose from "../config/mongooseConfig.js";

//Order Payment Schema
const {Schema} = mongoose;

const orderPaymentSchema = new Schema(
    {
        orderId: { type: mongoose.Schema.Types.ObjectId, required: true },
        totalPrice: { type: Number, required: true },
        tableNo: { type: Number, required: true },
        orderChecked: { type: Boolean, default: false },
        paymentMethod: { type: String, required: true },
        email: { type: String, required: true },
        paymentId: { type: String, required: true }
    },
    {
        collection: "orderPayment",
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Order Payment Model
const orderPaymentModel = new mongoose.model("orderPayment", orderPaymentSchema);

export default orderPaymentModel;