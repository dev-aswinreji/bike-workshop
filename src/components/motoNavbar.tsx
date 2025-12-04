import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Bike, Phone, Wrench, Shield, Settings } from 'lucide-react'

const MotoNavbar = () => {
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
    { path: '/', label: 'Garage', icon: <Bike className="w-5 h-5" /> },
    { path: '/services', label: 'Services', icon: <Wrench className="w-5 h-5" /> },
    { path: '/booking', label: 'Book Now', icon: <Shield className="w-5 h-5" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="w-5 h-5" /> },
    { path: '/admin', label: 'Admin', icon: <Settings className="w-5 h-5" /> },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg py-3 border-b-2 border-orange-500' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container-moto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Bike className="w-8 h-8 text-orange-500" />
                </div>
                <div className="absolute -top-2 -right-2 service-badge"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-wider">MOTO REPAIR PRO</span>
                <span className="text-xs text-orange-500 font-bold tracking-widest">EXPERT MECHANICS</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold uppercase tracking-wide transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                      : 'text-gray-300 hover:text-orange-500 hover:bg-gray-900/50'
                  }`}
                >
                  {item.icon}
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              ))}
              <a href="tel:+15551234567" className="ml-4 px-5 py-3 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold uppercase tracking-wide hover:shadow-exhaust transition-shadow">
                <Phone className="w-5 h-5 inline mr-2" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 rounded-lg bg-gray-900/50 border border-gray-800 flex items-center justify-center touch-moto"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-orange-500" />
              ) : (
                <Menu className="w-6 h-6 text-orange-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg animate-fadeIn lg:hidden pt-24">
          <div className="container-moto">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-xl border border-gray-800 text-lg font-bold uppercase tracking-wide transition-all touch-moto ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-900/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive(item.path) && (
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  )}
                </Link>
              ))}
              
              <div className="pt-6 space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold uppercase tracking-wide touch-moto"
                >
                  <Phone className="w-5 h-5" />
                  <span>Emergency Service</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-8 right-8 z-40 lg:hidden">
        <a
          href="tel:+15551234567"
          className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 shadow-2xl flex items-center justify-center touch-moto animate-engine-rumble"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>
    </>
  )
}

export default MotoNavbar
