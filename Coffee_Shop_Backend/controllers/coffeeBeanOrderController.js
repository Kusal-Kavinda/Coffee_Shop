import coffeeBeanOrderModel from "../models/coffeeBeanOrder.js";

// Create a new coffee bean order
const createCoffeeBeanOrder = async (req, res) => {
    try {
        const { beanId, size, orderId } = req.body;
        const newCoffeeBeanOrder = new coffeeBeanOrderModel({ beanId, size, orderId });
        await newCoffeeBeanOrder.save();
        res.status(201).json({ message: 'Coffee bean order created successfully', coffeeBeanOrder: newCoffeeBeanOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee bean order', error });
    }
}

// Get all coffee bean orders
const readCoffeeBeanOrder = async (req, res) => {
    try {
        const coffeeBeanOrders = await coffeeBeanOrderModel.find();
        res.json(coffeeBeanOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee bean orders', error });
    }
}

export { createCoffeeBeanOrder, readCoffeeBeanOrder };
