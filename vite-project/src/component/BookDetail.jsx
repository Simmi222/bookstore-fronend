import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PaymentModal from './PaymentModal'
import Navbar from './Navbar'
import Footer from './Footer'

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { authUser } = useAuth()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isReading, setIsReading] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!authUser) {
      navigate('/login')
      return
    }

    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/books/${id}`)
        const data = await response.json()
        
        if (data.success) {
          setBook(data.data)
        } else {
          setError('Book not found')
        }
      } catch (error) {
        setError('Error fetching book details')
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBook()
  }, [id, authUser, navigate])

  const handleStartReading = () => {
    if (book.price === 0 || isPurchased) {
      setIsReading(true)
    } else {
      alert('Please purchase this book to read it!')
    }
  }

  const handleBuyNow = () => {
    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    setIsPurchased(true)
    alert('Book purchased successfully! You can now read it.')
  }

  const handleBackToBooks = () => {
    navigate('/course')
  }

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
        <Footer />
      </div>
    )
  }

  if (error || !book) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Book Not Found</h2>
            <button onClick={handleBackToBooks} className="btn btn-primary">
              Back to Books
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  if (isReading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-16 bg-base-100">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="mb-6 flex justify-between items-center">
              <h1 className="text-3xl font-bold">{book.name}</h1>
              <button 
                onClick={() => setIsReading(false)}
                className="btn btn-secondary btn-sm"
              >
                Back to Details
              </button>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-6 text-center">📖 Book Summary</h2>
                
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">About This Book</h3>
                  <p className="text-gray-700">
                    {book.description || 'This book provides valuable insights and knowledge in its field.'}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Highlights:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Written by renowned author {book.author}</li>
                    <li>Comprehensive coverage of the subject matter</li>
                    <li>Easy to understand language and examples</li>
                    <li>Perfect for both beginners and advanced readers</li>
                    {book.pages && <li>Contains {book.pages} pages of valuable content</li>}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">What You'll Learn:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>• Fundamental concepts and principles</p>
                    <p>• Practical applications and real-world examples</p>
                    <p>• Advanced techniques and best practices</p>
                    <p>• Tips and tricks from industry experts</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Chapter Overview:</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h4 className="font-medium">Chapter 1: Introduction</h4>
                      <p className="text-sm text-gray-600">Getting started with the basics and understanding core concepts.</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h4 className="font-medium">Chapter 2: Fundamentals</h4>
                      <p className="text-sm text-gray-600">Deep dive into fundamental principles and methodologies.</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h4 className="font-medium">Chapter 3: Advanced Topics</h4>
                      <p className="text-sm text-gray-600">Exploring advanced concepts and practical applications.</p>
                    </div>
                    <div className="border-l-4 border-purple-400 pl-4">
                      <h4 className="font-medium">Chapter 4: Conclusion</h4>
                      <p className="text-sm text-gray-600">Summary and next steps for continued learning.</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  {book.price === 0 ? (
                    <div>
                      <p className="text-lg font-semibold text-green-600 mb-2">
                        🎉 This is a FREE book!
                      </p>
                      <p className="text-gray-600">
                        Enjoy unlimited access to all the content. Happy reading! 📚
                      </p>
                    </div>
                  ) : isPurchased ? (
                    <div>
                      <p className="text-lg font-semibold text-green-600 mb-2">
                        ✅ You own this book!
                      </p>
                      <p className="text-gray-600">
                        Thank you for your purchase. Enjoy reading! 📖
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-lg font-semibold text-blue-600 mb-2">
                        💰 Premium Content
                      </p>
                      <p className="text-gray-600">
                        Purchase this book to access the full content and support the author.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          
          {/* Back Button */}
          <button 
            onClick={handleBackToBooks}
            className="mb-6 btn btn-ghost btn-sm"
          >
            ← Back to Books
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Book Image */}
            <div className="flex justify-center">
              <img
                src={book.image}
                alt={book.name}
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{book.name}</h1>
                <h2 className="text-xl text-gray-600 mb-4">{book.title}</h2>
                <p className="text-lg">
                  <span className="font-semibold">Author:</span> {book.author}
                </p>
              </div>

              <div className="divider"></div>

              <div className="space-y-3">
                {book.pages && (
                  <p><span className="font-semibold">Pages:</span> {book.pages}</p>
                )}
                {book.language && (
                  <p><span className="font-semibold">Language:</span> {book.language}</p>
                )}
                {book.publisher && (
                  <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                )}
                {book.rating && (
                  <p><span className="font-semibold">Rating:</span> ⭐ {book.rating}/5</p>
                )}
              </div>

              <div className="divider"></div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Description:</h3>
                <p className="text-gray-700 leading-relaxed">
                  {book.description || 'No description available for this book.'}
                </p>
              </div>

              <div className="divider"></div>

              {/* Price and Action Buttons */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  {book.price === 0 ? (
                    <span className="badge badge-success badge-lg text-white font-bold">
                      FREE BOOK
                    </span>
                  ) : (
                    <span className="text-3xl font-bold text-primary">
                      ₹{book.price}
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {book.price === 0 ? (
                    <button 
                      onClick={handleStartReading}
                      className="btn btn-primary btn-lg"
                    >
                      📖 Start Reading
                    </button>
                  ) : isPurchased ? (
                    <button 
                      onClick={handleStartReading}
                      className="btn btn-success btn-lg"
                    >
                      📖 Read Book
                    </button>
                  ) : (
                    <button 
                      onClick={handleBuyNow}
                      className="btn btn-primary btn-lg"
                    >
                      💳 Buy Now
                    </button>
                  )}
                  
                  <button 
                    onClick={() => alert('Added to favorites!')}
                    className="btn btn-outline btn-lg"
                  >
                    ❤️ Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      {book && (
        <PaymentModal 
          book={book}
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
      
      <Footer />
    </div>
  )
}

export default BookDetail