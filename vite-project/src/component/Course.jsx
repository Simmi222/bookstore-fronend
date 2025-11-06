import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'

function Course() {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

        // Fetch books from MongoDB API instead of local JSON
        const response = await fetch(`${API_URL}/api/books`)
        const data = await response.json()
        
        if (data.success) {
          setBooks(data.data)
          
          // Check if there's a search query
          const urlParams = new URLSearchParams(location.search)
          const searchQuery = urlParams.get('search')
          
          if (searchQuery) {
            const filtered = data.data.filter(book => 
              book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              book.author.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setFilteredBooks(filtered)
          } else {
            setFilteredBooks(data.data)
          }
        } else {
          console.error('Failed to fetch books:', data.message)
          setBooks([])
          setFilteredBooks([])
        }
      } catch (error) {
        console.error('Error fetching books:', error)
        setBooks([])
        setFilteredBooks([])
      }
    }

    fetchBooks()
  }, [location.search])

  const handleGoBack = () => {
    navigate('/')
  }

  const urlParams = new URLSearchParams(location.search)
  const searchQuery = urlParams.get('search')

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16"> {/* Padding for fixed navbar */}
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We are delighted to have you here
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Welcome to our comprehensive course collection! Here you'll find an extensive library 
              of books covering various topics from classic literature to modern programming guides. 
              Whether you're looking for free resources to start your learning journey or premium 
              content to advance your skills, we have something for everyone. Our carefully curated 
              selection ensures quality content that will help you achieve your educational goals 
              and expand your knowledge in your areas of interest.
            </p>
            
            {/* Back Button */}
            <button 
              onClick={handleGoBack}
              className="mt-8 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-8 py-3 text-lg font-semibold"
            >
              ← Back
            </button>
          </div>

          {/* Books Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'All Books'}
            </h2>
            {searchQuery && (
              <p className="text-center text-gray-600 mb-8">
                Found {filteredBooks.length} book(s) matching your search
              </p>
            )}
            
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                  <Card key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold mb-2">No books found</h3>
                <p className="text-gray-600 mb-6">
                  {searchQuery 
                    ? `No books match "${searchQuery}". Try searching with different keywords.`
                    : 'No books available at the moment.'
                  }
                </p>
                {searchQuery && (
                  <button 
                    onClick={() => navigate('/course')}
                    className="btn btn-primary"
                  >
                    View All Books
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Course