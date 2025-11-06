import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
// Filename on disk is `Freebook.jsx` (lowercase 'b').
// On Windows this resolves case-insensitively, but Linux (Vercel) is case-sensitive.
// Import using the exact filename so builds on Linux succeed.
import FreeBook from './Freebook'
import Footer from './Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <FreeBook/>
      <Footer/>
    </>
  )
}

export default Home