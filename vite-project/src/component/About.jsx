import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="pt-16"> {/* Padding for fixed navbar */}
        <div className="max-w-screen-xl container mx-auto md:px-20 px-4 py-16">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About BookStore
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your trusted companion in the journey of knowledge and learning. 
              Discover our story, mission, and commitment to making quality education accessible to everyone.
            </p>
            
            {/* Back Button */}
            <button 
              onClick={handleGoBack}
              className="mt-8 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-8 py-3 text-lg font-semibold"
            >
              ← Back
            </button>
          </div>

          {/* About Content */}
          <div className="space-y-16">
            
            {/* Our Story */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Founded in 2020, BookStore began as a small initiative to make quality books 
                  and educational resources accessible to everyone. What started as a passion project 
                  has grown into a comprehensive platform serving thousands of learners worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that knowledge should be available to all, regardless of economic background. 
                  That's why we offer a perfect mix of free and premium content, ensuring that learning 
                  never stops due to financial constraints.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">Since 2020</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">10K+</div>
                      <div className="text-sm text-gray-600">Happy Readers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">500+</div>
                      <div className="text-sm text-gray-600">Books Available</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">50+</div>
                      <div className="text-sm text-gray-600">Free Resources</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-800">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Mission */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                  <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Quality Content</h3>
                  <p className="text-gray-600">Carefully curated books and resources from trusted authors and publishers worldwide.</p>
                </div>

                <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                  <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Community</h3>
                  <p className="text-gray-600">Building a global community of learners who support and inspire each other.</p>
                </div>

                <div className="bg-base-100 p-6 rounded-lg shadow-lg">
                  <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                  <p className="text-gray-600">Making knowledge accessible to everyone through free resources and affordable pricing.</p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Excellence</div>
                  <p className="text-sm text-gray-600">Striving for the highest quality in everything we do</p>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Innovation</div>
                  <p className="text-sm text-gray-600">Embracing new technologies to enhance learning</p>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Integrity</div>
                  <p className="text-sm text-gray-600">Building trust through transparency and honesty</p>
                </div>
                <div className="text-center">
                  <div className="text-pink-600 font-bold text-lg mb-2">Inclusivity</div>
                  <p className="text-sm text-gray-600">Welcoming learners from all backgrounds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default About