import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Hero from './components/Hero'
import InscriptionForm from './components/InscriptionForm'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import Admin from './components/Admin'
import './App.css'

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
        <Route path="/admin"   element={<Admin />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
