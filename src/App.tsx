import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Services from './pages/services'
import Booking from './pages/booking'
import Contact from './pages/contact'
import Admin from './pages/admin'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
