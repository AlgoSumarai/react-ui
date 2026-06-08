import './Header.css'
import { useState } from 'react'

function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const start = window.pageYOffset
    const target = section.getBoundingClientRect().top + start - 100
    const distance = target - start
    const duration = 900
    let startTime = null

    const ease = (t) => 1 - Math.pow(1 - t, 3)

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const time = Math.min(1, (timestamp - startTime) / duration)
      window.scrollTo(0, start + distance * ease(time))
      if (time < 1) window.requestAnimationFrame(step)
    }

    window.requestAnimationFrame(step)
  }

  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (sectionId, e) => {
    if (e) e.preventDefault()
    setMenuOpen(false)
    scrollToSection(sectionId)
  }

  return (
    <header className="page-header">
      <a className="site-logo" href="" onClick={(e) => {scrollToSection('top'); e.preventDefault()}}>
        <svg width="240" height="60" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            .main {
              fill: #FFFFFF;
              font-family: 'JetBrains Mono', 'Fira Code', monospace;
              font-size: 30px;
              font-weight: 700;
              letter-spacing: -1px;
            }

            .accent {
              fill: #E0F2FE;
            }

            .cursor {
              fill: #F8FAFC;
            }
          `}</style>

          <text x="10" y="40" className="main">
            &lt;<tspan className="accent">SMG</tspan>/&gt;
          </text>

          <rect x="168" y="18" width="3" height="24" rx="1.5" className="cursor">
            <animate
              attributeName="opacity"
              values="1;0;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </a>
      <button
        className={`header-toggle ${menuOpen ? 'open' : ''}`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((s) => !s)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a className="header-link" href="" onClick={(e) => handleNavClick('summary', e)}>
          Summary
        </a>
        <a className="header-link" href="" onClick={(e) => handleNavClick('experience', e)}>
          Experience
        </a>
        <a className="header-link" href="" onClick={(e) => handleNavClick('projects', e)}>
          Projects
        </a>
        <a className="header-link" href="" onClick={(e) => handleNavClick('skills', e)}>
          Skills
        </a>
      </nav>
    </header>
    
  )
}

export default Header
