import React, { createContext, useContext, useState, useEffect } from 'react';

// Create ThemeContext
const ThemeContext = createContext();

// ThemeProvider component to wrap the entire app
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Check if user has a saved theme preference when app starts
  useEffect(() => {
    const savedTheme = localStorage.getItem('bookstore-theme');
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (savedTheme) {
      setTheme(savedTheme);
      htmlElement.setAttribute('data-theme', savedTheme);
      bodyElement.className = savedTheme;
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      htmlElement.setAttribute('data-theme', defaultTheme);
      bodyElement.className = defaultTheme;
    }
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    setTheme(newTheme);
    localStorage.setItem('bookstore-theme', newTheme);
    htmlElement.setAttribute('data-theme', newTheme);
    bodyElement.className = newTheme;
  };

  // Function to set specific theme
  const setSpecificTheme = (newTheme) => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    setTheme(newTheme);
    localStorage.setItem('bookstore-theme', newTheme);
    htmlElement.setAttribute('data-theme', newTheme);
    bodyElement.className = newTheme;
  };

  // Context value
  const value = {
    theme,
    toggleTheme,
    setSpecificTheme,
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use ThemeContext
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;