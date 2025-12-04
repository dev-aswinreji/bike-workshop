import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BikerNavbar from './components/bikerNavbar'
import BikerFooter from './components/bikerFooter'
import Home from './pages/home'
import Services from './pages/services'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Admin from './pages/admin'
import './index.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <BikerNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <BikerFooter />
      </div>
    </Router>
  )
}

export default App
