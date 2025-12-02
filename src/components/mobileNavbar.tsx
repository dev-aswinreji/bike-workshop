import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const MobileNavbar = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', emoji: '🏠', color: 'text-[--theme-primary]' },
    { path: '/services', label: 'Services', emoji: '🔧', color: 'text-[--theme-secondary]' },
    { path: '/booking', label: 'Book', emoji: '📅', color: 'text-[--theme-accent]' },
    { path: '/contact', label: 'Contact', emoji: '📞', color: 'text-[--theme-info]' },
    { path: '/admin', label: 'Admin', emoji: '👨‍💼', color: 'text-[--theme-warning]' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* Bottom Navigation Bar (Mobile Only) */}
      <nav className="navbar-mobile shadow-2xl">
        <div className="flex justify-around items-center h-16">
          {navItems.slice(0, 3).map((item) => {
            const active = isActive(item.path)
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl touch-button ${
                  active ? 'bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]' : 'hover:bg-[color-mix(in_srgb,var(--theme-neutral)_10%,transparent)]'
                }`}
              >
                <span className="emoji-icon text-2xl">{item.emoji}</span>
                <span className={`text-xs mt-1 ${
                  active ? 'font-bold text-[--theme-primary]' : 'text-[color-mix(in_srgb,var(--theme-neutral)_60%,transparent)]'
                }`}>
                  {item.label}
                </span>
              </Link>
            )
          })}

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center p-2 rounded-2xl touch-button hover:bg-[color-mix(in_srgb,var(--theme-neutral)_10%,transparent)]"
          >
            <span className="emoji-icon text-2xl">{isMenuOpen ? '❌' : '📱'}</span>
            <span className="text-xs mt-1 text-[color-mix(in_srgb,var(--theme-neutral)_60%,transparent)]">
              More
            </span>
          </button>
        </div>
      </nav>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[color-mix(in_srgb,var(--theme-base)_95%,transparent)] backdrop-blur-lg animate-fadeIn md:hidden">
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gradient">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-circle btn-ghost touch-button"
              >
                <span className="emoji-icon text-2xl">❌</span>
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-grow space-y-2">
              {navItems.map((item) => {
                const active = isActive(item.path)
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center p-4 rounded-2xl transition-all ${
                      active ? 'bg-gradient-to-r from-[color-mix(in_srgb,var(--theme-primary)_20%,transparent)] to-[color-mix(in_srgb,var(--theme-secondary)_20%,transparent)]' : 'hover:bg-[color-mix(in_srgb,var(--theme-neutral)_10%,transparent)]'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${active ? 'bg-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)]' : 'bg-[color-mix(in_srgb,var(--theme-neutral)_10%,transparent)]'}`}>
                      <span className="emoji-icon text-xl">{item.emoji}</span>
                    </div>
                    <span className={`ml-4 text-lg ${
                      active ? 'font-bold text-[--theme-primary]' : 'text-[--theme-neutral]'
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* Contact Info at Bottom */}
            <div className="mt-auto p-4 bg-gradient-to-r from-[color-mix(in_srgb,var(--theme-primary)_10%,transparent)] to-[color-mix(in_srgb,var(--theme-secondary)_10%,transparent)] rounded-2xl">
              <p className="text-sm text-[color-mix(in_srgb,var(--theme-neutral)_70%,transparent)]">Need help? Call us now!</p>
              <a href="tel:+15551234567" className="text-xl font-bold text-[--theme-primary]">
                📞 (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MobileNavbar
