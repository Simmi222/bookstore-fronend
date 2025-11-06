import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import Home from './component/Home'
import Course from './component/Course'
import BookDetail from './component/BookDetail'
import Contact from './component/Contact'
import About from './component/About'
import Login from './component/Login'
import Signup from './component/Signup'
import PrivateRoute from './component/PrivateRoute'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/course" 
              element={
                <PrivateRoute>
                  <Course />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/book/:id" 
              element={
                <PrivateRoute>
                  <BookDetail />
                </PrivateRoute>
              } 
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App