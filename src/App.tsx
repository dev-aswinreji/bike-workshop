import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SimpleNavbar from './components/navbar'
import SimpleFooter from './components/footer'
import Home from './pages/home'
import Services from './pages/services'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Admin from './pages/admin'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <SimpleNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <SimpleFooter />
      </div>
    </Router>
  )
}

export default App
