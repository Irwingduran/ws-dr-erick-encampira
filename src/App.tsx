// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Service'
import ContactPage from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'
import Resena from './pages/Resenas'
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service" element={<ServiceDetails/>} />
      <Route path='/resenas' element={<Resena/>} />
    </Routes>
  )
}

export default App