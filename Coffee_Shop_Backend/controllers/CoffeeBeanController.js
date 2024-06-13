import coffeeBeanModel from "../models/coffeeBean.js";

const createCoffeeBean = async (req, res) => {
    try {
        const { name, prices, beanId } = req.body;
        const newCoffeeBean = new coffeeBeanModel({ name, prices, beanId });
        await newCoffeeBean.save();
        res.status(201).json({ message: 'Coffee Bean created successfully', coffeeBean: newCoffeeBean });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coffee bean', error });
    }
}

const readCoffeeBean = async (req, res) => {
    try {
        const coffeeBeans = await coffeeBeanModel.find();
        res.json(coffeeBeans);
    } catch (error) {
        res.status(500).json({ message: 'Error reading coffee beans', error });
    }
}

export { createCoffeeBean, readCoffeeBean };