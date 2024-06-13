import orderPaymentModel from "../models/orderPayment.js";

const createOrderPayment = async (req, res) => {
    try {
        const { orderId, totalPrice, tableNo, orderChecked, paymentMethod, email, paymentId } = req.body;
        const newOrderPayment = new orderPaymentModel({ orderId, totalPrice, tableNo, orderChecked, paymentMethod, email, paymentId });
        await newOrderPayment.save();
        res.status(201).json({ message: 'Order payment created successfully', orderPayment: newOrderPayment });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order payment', error });
    }
}

const readOrderPayment = async (req, res) => {
    try {
        const orderPayments = await orderPaymentModel.find();
        res.json(orderPayments);
    } catch (error) {
        res.status(500).json({ message: 'Error reading order payments', error });
    }
}

export { createOrderPayment, readOrderPayment };
