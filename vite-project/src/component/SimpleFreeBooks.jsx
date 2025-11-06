import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SimpleFreeBooks = () => {
  // State to store filtered free books
  const [freeBooks, setFreeBooks] = useState([]);

  // useEffect to fetch all book data using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all book data using Axios
        const response = await axios.get('http://localhost:4001/book');
        const allBooks = response.data.data || response.data;
        
        // Filter the data to only include books where category is "free"
        const filteredData = allBooks.filter(book => book.category === "free");
        
        // Store that filtered data in state
        setFreeBooks(filteredData);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Free Books</h2>
      {/* Map over filtered data to display */}
      {freeBooks.map((book, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{book.name}</h3>
          <p>{book.title}</p>
          <p>Category: {book.category}</p>
          <p>Price: FREE</p>
        </div>
      ))}
    </div>
  );
};

export default SimpleFreeBooks;