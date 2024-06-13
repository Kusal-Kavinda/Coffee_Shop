import mongoose from "../config/mongooseConfig.js";

// Coffee Bean Order Schema
const {Schema} = mongoose;

const coffeeBeanOrderSchema = new Schema(
    {
        beanId: { type: String, required: true },
        orderId: { type: Schema.Types.ObjectId, ref: "orderPayment", required: true }
    },
    {
        collection: "coffeeBeanOrder",
        timestamps: true // Adds createdAt and updatedAt timestamps
    }
);

// Coffee Bean Order Model
const coffeeBeanOrderModel = new mongoose.model("coffeeBeanOrder", coffeeBeanOrderSchema);

export default coffeeBeanOrderModel;