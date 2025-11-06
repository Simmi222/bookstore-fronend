// Simple Login Component (Exact as per your prompt)

import React, { useState } from 'react';
import axios from 'axios';

const SimpleLogin = () => {
  // useState for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // On form submit, send POST request
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to http://localhost:4001/user/login
      const response = await axios.post('http://localhost:4001/user/login', {
        email: email,
        password: password
      });

      // If login is successful, alert success and show user fullName and email
      alert(`Login successful! User: ${response.data.user.fullName} (${response.data.user.email})`);
      
      // Clear form
      setEmail('');
      setPassword('');
      
      console.log('Login response:', response.data);

    } catch (error) {
      // If login fails, alert "Invalid credentials"
      alert('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      
      {/* Create a form with inputs for email and password */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
        <button 
          type="submit"
          style={{ 
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SimpleLogin;