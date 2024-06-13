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

export { createUser, readUsers };