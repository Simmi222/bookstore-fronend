import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const BookList = () => {
  // useState to define "book" state
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect with async function to fetch data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        
    // Axios API call to fetch data from backend
  const response = await axios.get(`${API_URL}/api/books`);
        
        // Store the response in state
        setBook(response.data.data || response.data);
        
      } catch (error) {
        // Handle errors with try-catch
        console.error('Error fetching books:', error);
        setError(error.message || 'Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchBooks();
  }, []); // Empty dependency array to run once on component mount

  // Render loading state
  if (loading) {
    return <div className="text-center p-4">Loading books...</div>;
  }

  // Render error state
  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        Error: {error}
      </div>
    );
  }

  // Render books
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      
      {book.length === 0 ? (
        <p className="text-gray-500">No books available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {book.map((item, index) => (
            <div key={item._id || index} className="border rounded-lg p-4 shadow-md">
              <img 
                src={item.image || 'https://via.placeholder.com/200x300'} 
                alt={item.title}
                className="w-full h-48 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.title}</p>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  {item.price === 0 ? 'FREE' : `₹${item.price}`}
                </span>
                <button className="btn btn-primary btn-sm">
                  {item.price === 0 ? 'Read Now' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;