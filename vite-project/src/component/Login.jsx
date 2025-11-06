import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
import { useAuth } from '../context/AuthContext'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.email && formData.password) {
      try {
  // Send POST request to backend login
  const response = await axios.post(`${API_URL}/user/login`, {
          email: formData.email,
          password: formData.password
        });

        // If login is successful, use AuthContext login function
        login(response.data.user);
        
        alert(`Login successful! Welcome ${response.data.user.fullName} (${response.data.user.email})`);
        
        navigate('/')
        
      } catch (error) {
        // If login fails, alert "Invalid credentials"
        if (error.response?.status === 400) {
          alert('Invalid credentials');
        } else {
          alert('Login failed. Please try again.');
        }
        console.error('Login error:', error);
      }
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-6">Login</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button 
                type="submit" 
                className="btn btn-primary hover:bg-pink-500 hover:border-pink-500 transition-colors duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="link link-primary font-semibold">
                Sign up here
              </Link>
            </p>
          </div>

          <div className="text-center mt-4">
            <Link to="/" className="btn btn-ghost">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login