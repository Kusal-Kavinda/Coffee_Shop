import coffeeOrderModel from "../models/coffeeOrder.js";

const createCoffeeOrder = async (req, res) => {
    try {
        const { coffeeId, size, orderId } = req.body;

        // Validate Input
        if (!coffeeId || !size || !orderId) {
            return res.status(400).json({ message: 'Coffee ID, size, and order ID are required' });
        }

        const newCoffeeOrder = new coffeeOrderModel({ coffeeId, size, orderId });
        await newCoffeeOrder.save();

        res.status(201).json({ message: 'Coffee order created successfully', coffeeOrder: newCoffeeOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee order', error: error.message });
    }
};

const readCoffeeOrders = async (req, res) => {
    try {
        const coffeeOrders = await coffeeOrderModel.find();
        res.status(200).json(coffeeOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee orders', error: error.message });
    }
};

export { createCoffeeOrder, readCoffeeOrders };