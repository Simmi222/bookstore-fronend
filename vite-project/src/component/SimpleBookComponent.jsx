import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AUTH_URL = import.meta.env.VITE_AUTH_URL || import.meta.env.VITE_API_URL || 'http://localhost:4001';

const SimpleBookComponent = () => {
  // useState to define "book" state
  const [book, setBook] = useState([]);

  // useEffect with async function
  useEffect(() => {
    const fetchData = async () => {
      try {
  // Axios API call to fetch data from auth/book endpoint
  const response = await axios.get(`${AUTH_URL}/book`);
        
        // Store the response in state
        setBook(response.data);
        
      } catch (error) {
        // Handle errors with try-catch
        console.error('Error fetching data:', error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  return (
    <div>
      <h2>Books</h2>
      {book.length > 0 ? (
        <ul>
          {book.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
};

export default SimpleBookComponent;