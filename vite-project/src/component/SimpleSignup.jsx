// Simple Signup Component (Exact as per your prompt)

import React, { useState } from 'react';
import axios from 'axios';

const SimpleSignup = () => {
  // useState for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // On form submit, send POST request using Axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to http://localhost:4001/user/signup
      // Send data as JSON
      const response = await axios.post('http://localhost:4001/user/signup', {
        fullName: fullName,
        email: email,
        password: password
      });

      // Show alert on success
      alert('Signup successful! User ID: ' + response.data.user.id);
      console.log('Response:', response.data);
      
      // Clear form
      setFullName('');
      setEmail('');
      setPassword('');

    } catch (error) {
      // Show alert on error
      alert('Signup failed: ' + (error.response?.data?.message || error.message));
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Sign Up</h2>
      
      {/* Create a form with input fields for fullName, email, and password */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
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
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SimpleSignup;