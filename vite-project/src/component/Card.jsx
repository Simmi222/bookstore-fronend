import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import PaymentModal from './PaymentModal'

export default function Card({ book }) {
  const navigate = useNavigate()
  const { authUser } = useAuth()
  const [showPayment, setShowPayment] = useState(false)

  const handleReadNow = () => {
    if (!authUser) {
      alert('Please login to read books!')
      navigate('/login')
      return
    }

    // Navigate to book detail page
    navigate(`/book/${book._id}`)
  }

  const handleBuyNow = () => {
    if (!authUser) {
      alert('Please login to purchase books!')
      navigate('/login')
      return
    }

    setShowPayment(true)
  }

  const handlePaymentSuccess = () => {
    alert(`Thank you for purchasing "${book.name}"! You can now read it.`)
    // Navigate to book detail page after purchase
    navigate(`/book/${book._id}`)
  }

  return (
    <>
      <div className="card bg-base-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
        <figure>
          <img
            src={book.image}
            alt={book.title}
            className="h-64 w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-lg font-bold">{book.name}</h2>
          <p className="text-sm text-gray-600">{book.title}</p>
          <div className="card-actions justify-between items-center mt-4">
            <div className="price">
              {book.price === 0 ? (
                <button className="btn btn-success btn-sm font-bold text-white cursor-default">
                  FREE
                </button>
              ) : (
                <span className="text-xl font-bold text-primary">₹{book.price}</span>
              )}
            </div>
            <button 
              onClick={book.price === 0 ? handleReadNow : handleBuyNow}
              className="btn btn-primary btn-sm hover:bg-pink-500 hover:border-pink-500 transition-colors duration-300"
            >
              {book.price === 0 ? 'Read Now' : 'Buy Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        book={book}
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
      />
    </>
  )
}
