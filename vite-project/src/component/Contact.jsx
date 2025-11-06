import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
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
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Get in touch with us for any questions, 
              suggestions, or support regarding our bookstore services.
            </p>
            
            {/* Back Button */}
            <button 
              onClick={handleGoBack}
              className="mt-8 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-8 py-3 text-lg font-semibold"
            >
              ← Back
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Address</h3>
                    <p className="text-gray-600">123 BookStore Street, Library City, BC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 9876543210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600">contact@bookstore.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-pink-500 text-white rounded-full p-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Working Hours</h3>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-base-100 p-8 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              <form className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Message Subject"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered w-full h-32"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn bg-pink-500 hover:bg-pink-600 text-white border-none w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact