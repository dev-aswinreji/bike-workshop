import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Bike, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/themeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/booking', label: 'Book' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-card)] border-b border-[var(--border-color)]">
      <div className="minimal-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Bike className="w-6 h-6" />
            <span className="text-lg font-semibold text-[var(--text-primary)]">MotoFix</span>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-[var(--hover-bg)] transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Admin
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-[var(--hover-bg)] rounded-lg transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[var(--border-color)]">
            <div className="py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm ${
                    location.pathname === item.path
                      ? 'text-[var(--text-primary)] bg-[var(--hover-bg)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--hover-bg)]"
              >
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
