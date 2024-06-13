import userModel from "../models/user.js";

const createUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const newUser = new userModel({ userName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

const readUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error reading users', error });
    }
}

const readUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await userModel.findOne({ email });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error reading user by email', error });
    }
}

export { createUser, readUsers, readUserByEmail };