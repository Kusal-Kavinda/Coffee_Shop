import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Axios from 'axios';
import '../App.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send signin request to backend
            const response = await Axios.post('http://localhost:3000/signin', { email, password });

            // Destructure username and email from the response data
            const { username, email: userEmail } = response.data;

            setMessage('User signed in successfully');
            console.log("Response:", response.data);

            // Store user data (email and username) in localStorage
            localStorage.setItem('user', JSON.stringify({ username, email: userEmail }));

            // Clear input fields
            setEmail('');
            setPassword('');

            // Redirect to user profile or dashboard page after successful signin
            navigate('/logout'); // Change '/profile' to the appropriate route
        } catch (err) {
            if (err.response && err.response.data) {
                setMessage(err.response.data.message);
            } else {
                setMessage('Error signing in');
            }
            console.error("Error signing in:", err);
        }
    };

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign In</h2>

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

                <button type='submit'>Sign In</button>
                {message && <p>{message}</p>}

                <p>Don't Have an Account? <Link to="/signup">Sign Up</Link></p>
            </form>
        </div>
    );
};

export default Signin;