import coffeeOrderModel from "../models/coffeeOrder.js";

const createCoffeeOrder = async (req, res) => {
    try {
        const { coffeeId, size, orderId } = req.body;
        const newCoffeeOrder = new coffeeOrderModel({ coffeeId, size, orderId });
        await newCoffeeOrder.save();
        res.status(201).json({ message: 'Coffee order created successfully', coffeeOrder: newCoffeeOrder });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee order', error });
    }
}

const readCoffeeOrders = async (req, res) => {
    try {
        const coffeeOrders = await coffeeOrderModel.find();
        res.json(coffeeOrders);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee orders', error });
    }
}

export { createCoffeeOrder, readCoffeeOrders };
