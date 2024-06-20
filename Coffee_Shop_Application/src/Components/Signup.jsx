import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data:", { userName, email, password }); // Check form data before making request
        try {
            const response = await Axios.post('http://localhost:3000/createUser', { userName, email, password });
            setMessage('User created successfully');
            console.log("Response:", response.data); // Log successful response
            setUserName('');
            setEmail('');
            setPassword('');
        } catch (err) {
            if (err.response && err.response.data) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Error creating user');
            }
            console.error("Error creating user:", err); // Log error details
        }
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="userName">Username:</label>
                <input
                    type="text"
                    id="userName"
                    placeholder='Username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    autoComplete='off'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder='******'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type='submit'>Sign Up</button>
                {message && <p>{message}</p>}
                
                <p>Have an Account? <Link to="/signin">Sign In</Link></p>
            </form>
        </div>
    );
};

export default Signup;