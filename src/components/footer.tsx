import { Phone, Mail, MapPin, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/themeContext'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className="bg-[var(--bg-card)] border-t border-[var(--border-color)]">
      <div className="minimal-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold text-[var(--text-primary)]">MotoFix</span>
              <div className="text-xs px-2 py-1 rounded bg-[var(--hover-bg)] text-[var(--text-secondary)]">
                {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
              </div>
            </div>
            <p className="text-[var(--text-secondary)] text-sm">
              Professional motorcycle repair services. Quality work, fair prices.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Mail size={16} />
                <span>service@motofix.com</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <MapPin size={16} />
                <span>123 Motor St, City</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Hours</h3>
            <div className="text-[var(--text-secondary)] text-sm space-y-1">
              <p>Mon-Fri: 8AM - 6PM</p>
              <p>Saturday: 9AM - 4PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Theme Info */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Theme</h3>
            <div className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
              {theme === 'light' ? (
                <>
                  <Sun size={16} />
                  <span>Light mode active</span>
                </>
              ) : (
                <>
                  <Moon size={16} />
                  <span>Dark mode active</span>
                </>
              )}
            </div>
            <p className="text-[var(--text-secondary)] text-sm mt-2">
              Toggle theme from the navigation menu
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border-color)] mt-8 pt-8 text-center text-[var(--text-secondary)] text-sm">
          <p>© {new Date().getFullYear()} MotoFix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
