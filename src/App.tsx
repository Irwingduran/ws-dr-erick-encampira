// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicesPage from './pages/Service'
import ContactPage from './pages/Contact'
import ServiceDetails from './pages/ServiceDetails'
import ServiceDetails2 from './pages/ServiceDetails2'
import ServiceDetails3 from './pages/ServiceDetails3'
import ServiceDetails4 from './pages/ServiceDetails4'
import Resena from './pages/Resenas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/resenas' element={<Resena/>} />
      <Route path="/service1" element={<ServiceDetails/>} />
      <Route path="/service2" element={<ServiceDetails2/>} />
      <Route path="/service3" element={<ServiceDetails3/>} />
      <Route path="/service4" element={<ServiceDetails4/>} />
    </Routes>
  )
}

export default App