import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bike, Menu, X, Phone, Sparkles } from 'lucide-react'

const PremiumNavbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book Now' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container-premium">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bike className="w-6 h-6 text-white" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  BikeRepair Pro
                </span>
                <span className="text-xs text-gray-500">Premium Service</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 animate-pulse-slow" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA & Menu Button */}
            <div className="flex items-center gap-4">
              <a href="tel:+15551234567" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium hover:shadow-xl transition-shadow">
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center touch-optimized md:hidden"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-blue-600" />
                ) : (
                  <Menu className="w-5 h-5 text-blue-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg animate-fadeIn md:hidden pt-20">
          <div className="container-premium">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive(item.path) && (
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  )}
                </Link>
              ))}
              
              <div className="pt-6 space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium touch-optimized"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Call</span>
                </a>
                
                <Link
                  to="/admin"
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-blue-200 text-blue-600 font-medium touch-optimized"
                >
                  <span>Admin Dashboard</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating CTA Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:+15551234567"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl flex items-center justify-center touch-optimized animate-pulse-slow"
        >
          <Phone className="w-6 h-6 text-white" />
        </a>
      </div>
    </>
  )
}

export default PremiumNavbar
