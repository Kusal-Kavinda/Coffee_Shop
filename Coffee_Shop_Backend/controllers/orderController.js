/* import userModel from "../models/userModel.js";

const createUser = async (req,res) => {
    const { fname, lname, age } = req.body;
    const newUser = new userModel({ fname, lname, age });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
}

const readUsers = async (req,res) => {
    const users = await userModel.find();
    res.json(users);
}

export {createUser, readUsers}; */