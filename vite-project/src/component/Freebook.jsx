import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import Card from './Card'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Freebook() {
  const [freeBooks, setFreeBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

        // Fetch books from MongoDB API
        const response = await fetch(`${API_URL}/api/books`)
        const data = await response.json()
        
        if (data.success) {
          // Filter only free books (price = 0 or category = 'free')
          const freeBooksData = data.data.filter(book => 
            book.category === 'free' || book.price === 0
          )
          setFreeBooks(freeBooksData)
        } else {
          console.error('Failed to fetch books:', data.message)
          setFreeBooks([])
        }
      } catch (error) {
        console.error('Error fetching books:', error)
        setFreeBooks([])
      }
    }

    fetchBooks()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // xl screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 1024, // lg screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 768, // md screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 640, // sm screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 480, // xs screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '10px'
        }
      }
    ]
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Free Offered Course
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our collection of free books and courses designed to enhance your knowledge 
          and skills. These carefully selected resources are available at no cost to help you 
          start your learning journey. From classic literature to modern programming guides, 
          explore diverse topics that interest you most.
        </p>
      </div>

      {/* Slider Section */}
      <div className="mt-12">
        <div className="slider-container">
          <Slider {...settings}>
            {freeBooks.map((book) => (
              <div key={book.id} className="px-3">
                <Card book={book} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Freebook