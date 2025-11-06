import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleBookComponent = () => {
  // useState to define "book" state
  const [book, setBook] = useState([]);

  // useEffect with async function
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Axios API call to fetch data from "http://localhost:4001/book"
        const response = await axios.get('http://localhost:4001/book');
        
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