import React, { useState } from 'react';
import axios from 'axios';

const AUTH_URL = import.meta.env.VITE_AUTH_URL || import.meta.env.VITE_API_URL || 'http://localhost:4001';

const LoginForm = () => {
  // useState for form data
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // On form submit, send POST request
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
  // Send POST request to auth login endpoint
  const response = await axios.post(`${AUTH_URL}/user/login`, {
        email: formData.email,
        password: formData.password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // If login is successful, alert success and show user fullName and email
      alert(`Login successful! Welcome ${response.data.user.fullName} (${response.data.user.email})`);
      
      // Store user data
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', response.data.user.email);
      localStorage.setItem('userName', response.data.user.fullName);
      localStorage.setItem('userId', response.data.user.id);
      
      // Reset form
      setFormData({
        email: '',
        password: ''
      });

    } catch (error) {
      // If login fails, alert "Invalid credentials"
      if (error.response?.status === 400 || error.response?.data?.message === 'Invalid credentials') {
        alert('Invalid credentials');
      } else {
        alert('Login failed. Please try again.');
      }
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      {/* Create a form with inputs for email and password */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-green-600 hover:underline">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;