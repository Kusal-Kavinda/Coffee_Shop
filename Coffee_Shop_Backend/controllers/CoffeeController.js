/* import userModel from "../models/userModel.js";

const createCoffee = async (req,res) => {
    const { fname, lname, age } = req.body;
    const newUser = new userModel({ fname, lname, age });
    await newUser.save();
    res.status(201).json({ message: 'Coffee created successfully', user: newUser });
}

const readCoffee = async (req,res) => {
    const users = await userModel.find();
    res.json(users);
}

export {createCoffee, readCoffee}; */