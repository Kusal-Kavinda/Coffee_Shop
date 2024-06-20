import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Fetch user data from localStorage
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            setUsername(user.username);
            setEmail(user.email);
        }
    }, []);

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('user');
        
        // Redirect to the signin page
        navigate('/signin');
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-form">
                <h2>Welcome, {username}</h2>
                <p>Email: {email}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;