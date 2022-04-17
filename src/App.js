import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import projectDetails from './pages/projectDetails'
import Offers from './pages/offers'
import Contact from './pages/contact'

function App() {
  const [cartIsEmpty] =useState(false)


  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <h1>ROYALX CONDOS</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/offers">Offers</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        {/* <Route path="/projects/:id/" element={<projectDetails />} /> */}
        <Route path="/projectsabc/*" element={<projectDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </div>
)
}  



export default App