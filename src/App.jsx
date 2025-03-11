import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'  
import Contact from './components/contact'
import Signin from './components/signin'
import Signup from './components/signup'
import Diary from './components/diary'
import Footer from './components/footer'


import './App.css'

function App() {

  

  return(
  
     <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/diary" element={<Diary/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
        {/* Other routes */}
      </Routes>
      <Footer />
    </Router>
    
  )
}

export default App
