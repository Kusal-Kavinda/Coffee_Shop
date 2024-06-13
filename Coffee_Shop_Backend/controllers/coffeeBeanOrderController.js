import coffeeBeanOrderModel from "../models/coffeeBeanOrder.js";

const createCoffeeBeanOrder = async (req, res) => {
    try {
        const { beanId, size, orderId } = req.body;

        // Validate Input
        if (!beanId || !size || !orderId) {
            return res.status(400).json({ message: 'Bean ID, size, and order ID are required' });
        }

        const newCoffeeBeanOrder = new coffeeBeanOrderModel({ beanId, size, orderId });
        await newCoffeeBeanOrder.save();

        res.status(201).json({ message: 'Coffee bean order created successfully', coffeeBeanOrder: newCoffeeBeanOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee bean order', error: error.message });
    }
};

const readCoffeeBeanOrder = async (req, res) => {
    try {
        const coffeeBeanOrders = await coffeeBeanOrderModel.find();

        res.status(200).json(coffeeBeanOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee bean orders', error: error.message });
    }
};

export { createCoffeeBeanOrder, readCoffeeBeanOrder };