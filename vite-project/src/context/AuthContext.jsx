import React, { createContext, useContext, useState, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap the app
export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in when app starts
  useEffect(() => {
    const checkAuthStatus = () => {
      try {
        // Check localStorage for user data
        const storedUser = localStorage.getItem('authUser');
        if (storedUser) {
          setAuthUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        localStorage.removeItem('authUser');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function
  const login = (userData) => {
    setAuthUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem('authUser');
  };

  // Context value
  const value = {
    authUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use AuthContext
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export default AuthContext;