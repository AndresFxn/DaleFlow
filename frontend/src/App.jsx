import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import InscriptionForm from './components/InscriptionForm'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import './App.css'

// Página principal
const Home = () => (
  <>
    <Hero />
    <InscriptionForm />
    <Pricing />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/gracias" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
