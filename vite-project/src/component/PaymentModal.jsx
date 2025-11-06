import React, { useState } from 'react'

function PaymentModal({ book, isOpen, onClose, onSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    upiId: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e) => {
    setPaymentData({
      ...paymentData,
      [e.target.name]: e.target.value
    })
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      onSuccess()
      onClose()
      alert(`Payment successful! You have purchased "${book.name}" for ₹${book.price}`)
    }, 2000)
  }

  const formatCardNumber = (value) => {
    return value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim()
  }

  const formatExpiryDate = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Complete Payment</h2>
            <button 
              onClick={onClose}
              className="btn btn-ghost btn-sm btn-circle"
            >
              ✕
            </button>
          </div>

          {/* Book Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex gap-4">
              <img 
                src={book.image} 
                alt={book.name}
                className="w-16 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{book.name}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-lg font-bold text-primary">₹{book.price}</p>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Payment Method</h3>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`btn btn-sm ${paymentMethod === 'card' ? 'btn-primary' : 'btn-outline'}`}
              >
                💳 Card
              </button>
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`btn btn-sm ${paymentMethod === 'upi' ? 'btn-primary' : 'btn-outline'}`}
              >
                📱 UPI
              </button>
              <button
                onClick={() => setPaymentMethod('wallet')}
                className={`btn btn-sm ${paymentMethod === 'wallet' ? 'btn-primary' : 'btn-outline'}`}
              >
                👛 Wallet
              </button>
            </div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handlePayment}>
            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="label">
                    <span className="label-text">Card Number</span>
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="input input-bordered w-full"
                    value={formatCardNumber(paymentData.cardNumber)}
                    onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
                    maxLength="19"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text">Expiry Date</span>
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className="input input-bordered w-full"
                      value={formatExpiryDate(paymentData.expiryDate)}
                      onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
                      maxLength="5"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text">CVV</span>
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      className="input input-bordered w-full"
                      value={paymentData.cvv}
                      onChange={handleInputChange}
                      maxLength="4"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Cardholder Name</span>
                  </label>
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                    value={paymentData.cardholderName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <label className="label">
                  <span className="label-text">UPI ID</span>
                </label>
                <input
                  type="text"
                  name="upiId"
                  placeholder="yourname@paytm"
                  className="input input-bordered w-full"
                  value={paymentData.upiId}
                  onChange={handleInputChange}
                  required
                />
              </div>
            )}

            {paymentMethod === 'wallet' && (
              <div className="text-center py-4">
                <div className="space-y-3">
                  <button type="button" className="btn btn-outline w-full">
                    💳 Paytm Wallet
                  </button>
                  <button type="button" className="btn btn-outline w-full">
                    📱 PhonePe
                  </button>
                  <button type="button" className="btn btn-outline w-full">
                    💰 Google Pay
                  </button>
                </div>
              </div>
            )}

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="btn btn-primary flex-1"
              >
                {isProcessing ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Processing...
                  </>
                ) : (
                  `Pay ₹${book.price}`
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal