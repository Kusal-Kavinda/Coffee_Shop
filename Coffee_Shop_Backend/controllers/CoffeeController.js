import coffeeModel from "../models/coffee.js";

const createCoffee = async (req, res) => {
    try {
        const { name, prices, coffeeId } = req.body;
        const newCoffee = new coffeeModel({ name, prices, coffeeId });
        await newCoffee.save();
        res.status(201).json({ message: 'Coffee created successfully', coffee: newCoffee });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee', error });
    }
}

const readCoffee = async (req, res) => {
    try {
        const coffees = await coffeeModel.find();
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee', error });
    }
}

export { createCoffee, readCoffee };