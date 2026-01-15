import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero />
    </div>
  )
}

export default App