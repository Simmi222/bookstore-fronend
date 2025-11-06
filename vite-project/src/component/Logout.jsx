import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Logout() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/signup")
    alert('Logged out successfully!')
  }

  return (
    <button 
      onClick={handleLogout}
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition-colors"
    >
      Logout
    </button>
  )
}

export default Logout