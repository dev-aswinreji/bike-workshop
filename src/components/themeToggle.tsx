import { useTheme } from '../contexts/themeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-[var(--text-secondary)]">
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
      <label className="theme-toggle">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
          aria-label="Toggle dark mode"
        />
        <span className="theme-slider"></span>
      </label>
    </div>
  )
}

export default ThemeToggle
