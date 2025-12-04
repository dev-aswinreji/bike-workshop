import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Bike, Phone, Shield, Wrench } from 'lucide-react'

const BikerNavbar = () => {
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
    { path: '/', label: 'Home', icon: <Bike className="w-4 h-4" /> },
    { path: '/services', label: 'Services', icon: <Wrench className="w-4 h-4" /> },
    { path: '/booking', label: 'Book Repair', icon: <Shield className="w-4 h-4" /> },
    { path: '/contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg py-3 border-b-2 border-orange-500' 
          : 'bg-transparent py-5'
      }`}>
        <div className="container-biker">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-black to-gray-900 border-2 border-orange-500 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Bike className="w-7 h-7 text-orange-500" />
                </div>
                <div className="absolute -top-1 -right-1 skull-badge"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-wider">BIKE REPAIR PRO</span>
                <span className="text-xs text-orange-500 font-bold tracking-widest">PREMIUM SERVICE</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 bg-black/50 rounded-lg p-1 border border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-6 py-3 rounded-md font-bold uppercase tracking-wide transition-all ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                      : 'text-gray-300 hover:text-orange-500 hover:bg-gray-900'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            {/* CTA & Menu Button */}
            <div className="flex items-center gap-3">
              <a href="tel:+15551234567" className="hidden md:flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold uppercase tracking-wide hover:shadow-orange transition-shadow">
                <Phone className="w-4 h-4" />
                <span>Emergency Call</span>
              </a>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 rounded-md bg-gray-900 border border-gray-800 flex items-center justify-center touch-biker md:hidden"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-orange-500" />
                ) : (
                  <Menu className="w-5 h-5 text-orange-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg animate-fadeIn md:hidden pt-20">
          <div className="container-biker">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-lg border border-gray-800 text-lg font-bold uppercase tracking-wide transition-all touch-biker ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                      : 'text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {isActive(item.path) && (
                    <div className="bolt-icon"></div>
                  )}
                </Link>
              ))}
              
              <div className="pt-6 space-y-3">
                <a 
                  href="tel:+15551234567"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold uppercase tracking-wide touch-biker"
                >
                  <Phone className="w-5 h-5" />
                  <span>24/7 Emergency</span>
                </a>
                
                <Link
                  to="/admin"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg border-2 border-orange-500 text-orange-500 font-bold uppercase tracking-wide touch-biker"
                >
                  <span>Admin Garage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Emergency Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a
          href="tel:+15551234567"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 shadow-xl flex items-center justify-center touch-biker animate-engine-rumble"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
      </div>
    </>
  )
}

export default BikerNavbar
