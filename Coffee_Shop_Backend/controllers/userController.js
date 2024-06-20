import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const newUser = new userModel({ userName, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User Registered Successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Try Again', error });
    }
}

const readUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error Reading Users', error });
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

const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User Not Found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: 'User Signed In Successfully', token, username: user.userName, email: user.email });
    } catch (error) {
        res.status(500).json({ message: 'Error Signing In', error });
    }
}

export { createUser, readUsers, readUserByEmail, signinUser };