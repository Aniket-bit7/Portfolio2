import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Project'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
    </div>
  )
}

export default App