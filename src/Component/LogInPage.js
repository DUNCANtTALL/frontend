import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://localhost:7261/api/User/login', {
                email:email,
                password:password,
            });

            if (response.status === 200) {
                console.log('Login successful:', response.data);
                const { userId } = response.data;
                localStorage.setItem('userId', userId);
                navigate('/Home');

                // Navigate to a different screen after successful login if needed
            } else {
                console.error('Failed to log in:', response.data);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleSignUp = () => {
        navigate('/SignUp-Page'); 
    };

    return (
        <div style={{  padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Login</h2>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc' }}
                />
                <button onClick={handleSignIn} style={{ backgroundColor: '#007BFF', color: '#FFF', padding: '10px', width: '100%', border: 'none', cursor: 'pointer' }}>
                    Log In
                </button>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <button onClick={handleSignUp} style={{ backgroundColor: 'transparent', border: 'none', color: '#007BFF', cursor: 'pointer' }}>
                        Don't have an account? Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
