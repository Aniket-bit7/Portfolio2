import React from 'react'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Project'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero />
      <About/>
      <Projects/>
      <Experiences/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App