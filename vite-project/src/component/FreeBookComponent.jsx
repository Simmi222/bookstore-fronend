import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FreeBookComponent = () => {
  // useState to store filtered free books data
  const [freeBooks, setFreeBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch all book data using Axios
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch all book data using Axios
        const response = await axios.get('http://localhost:4001/book');
        const allBooks = response.data.data || response.data;
        
        // Filter the data to only include books where category is "free"
        const filteredFreeBooks = allBooks.filter(book => book.category === "free");
        
        // Store that filtered data in state
        setFreeBooks(filteredFreeBooks);
        
      } catch (error) {
        console.error('Error fetching books:', error);
        setError(error.message || 'Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading free books...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Free Books</h2>
      
      {freeBooks.length === 0 ? (
        <p className="text-gray-500">No free books available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map over filtered data to display */}
          {freeBooks.map((book, index) => (
            <div key={book._id || index} className="border rounded-lg p-4 shadow-md">
              <img 
                src={book.image || 'https://via.placeholder.com/200x300'} 
                alt={book.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{book.name}</h3>
              <p className="text-gray-600">{book.title}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  FREE
                </span>
                <button className="btn btn-success btn-sm">
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FreeBookComponent;