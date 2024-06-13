import userModel from "../models/user.js";

const createUser = async (req,res) => {
    const { userName, email, password } = req.body;
    const newUser = new userModel({ userName, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
}

const readUsers = async (req,res) => {
    const users = await userModel.find();
    res.json(users);
}

export {createUser, readUsers};