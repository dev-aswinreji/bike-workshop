import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Services from './pages/services'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Admin from './pages/admin'
import { ThemeProvider } from './contexts/themeContext'
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[var(--bg-primary)]">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              // <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
