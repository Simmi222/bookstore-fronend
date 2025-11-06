import React from 'react'

function Banner() {
  return (
    <div className="hero min-h-screen bg-base-200 pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-6">
        {/* Right side - Image */}
        <div className="lg:w-1/2">
          <img
            src="/bookstore.jpg"
            alt="Bookstore"
            className="max-w-lg rounded-lg shadow-2xl mx-auto"
          />
        </div>
        
        {/* Left side - Content */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">
            Hello, Welcome here to learn something new{' '}
            <span className="text-pink-500">everyday!!!</span>
          </h1>
          
          <p className="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner