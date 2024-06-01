/* import userModel from "../models/userModel.js";

const createCoffeeBean = async (req,res) => {
    const { fname, lname, age } = req.body;
    const newCoffeeBean = new userModel({ fname, lname, age });
    await newCoffeeBean.save();
    res.status(201).json({ message: 'Coffee Bean created successfully', use: newCoffeeBean });
}

const readCoffeeBean = async (req,res) => {
    const users = await userModel.find();
    res.json(users);
}

export {createCoffeeBean, readCoffeeBean}; */