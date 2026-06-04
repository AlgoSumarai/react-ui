
import './Home.css'

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    const start = window.pageYOffset
    const target = section.getBoundingClientRect().top + start - 24
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

  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio landing page</p>
          <h1 className="hero-title">Hi, I’m Your Name. I build modern web experiences with React.</h1>
          <p className="hero-text">
            I design clean, responsive interfaces and launch polished product landing pages, dashboards,
            and portfolio brands for fast-moving startups and creative teams.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => scrollToSection('projects')}>
              View work
            </button>
            <button className="secondary-button" type="button" onClick={() => scrollToSection('contact')}>
              Contact me
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-copy">
            <p className="visual-copy-label">Featured Project</p>
            <h2 className="visual-title">Interactive design systems, built for scale.</h2>
            <p className="visual-subtitle">
              A fast, mobile-first experience with attention to motion, typography, and accessible UI patterns.
            </p>
          </div>
        </div>

        <div className="hero-stat-grid">
          <article className="stat-card">
            <p className="stat-value">8+</p>
            <p className="stat-label">Years crafting interfaces</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">30+</p>
            <p className="stat-label">Web interfaces shipped</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">React • Vite • Tailwind</p>
            <p className="stat-label">Preferred stack</p>
          </article>
        </div>
      </section>

      <section>
        <h2 className="section-heading">What I build</h2>
        <p className="section-subtitle">
          Beautiful landing pages, portfolio sites, and web apps with a strong focus on clarity,
          performance, and brand expression.
        </p>

        <div className="feature-grid">
          <article className="feature-card">
            <h3 className="feature-title">Product Landing Pages</h3>
            <p className="feature-text">
              Engaging hero sections, intuitive navigation, and polished content layouts that convert
              visitors into leads.
            </p>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Interactive UI</h3>
            <p className="feature-text">
              Smooth transitions, responsive patterns, and accessible component UX for desktop and mobile.
            </p>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Brand-first Design</h3>
            <p className="feature-text">
              Thoughtful typography, refined color systems, and a visual tone that makes your portfolio feel
              cohesive and memorable.
            </p>
          </article>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-heading">Selected work</h2>
        <p className="section-subtitle">
          A few recent site builds that focus on performance, polish, and client storytelling.
        </p>

        <div className="project-grid">
          <article className="project-card">
            <div>
              <h3 className="project-title">LaunchFlow</h3>
              <p className="project-text">
                A responsive landing page for a product launch with animated sections, customer quotes,
                and a clear CTA-driven flow.
              </p>
            </div>
            <p className="project-meta">React · CSS animations · responsive design</p>
          </article>

          <article className="project-card">
            <div>
              <h3 className="project-title">Scale Studio</h3>
              <p className="project-text">
                A portfolio site with modular case studies, service cards, and a clean visual system for
                creative teams.
              </p>
            </div>
            <p className="project-meta">Vite · accessibility · fast load time</p>
          </article>

          <article className="project-card">
            <div>
              <h3 className="project-title">Brand Pulse</h3>
              <p className="project-text">
                A bold one-page brand experience with strong typography, gradient highlights, and
                mobile-first navigation.
              </p>
            </div>
            <p className="project-meta">UI/UX design · motion · web performance</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-card">
        <div>
          <h2 className="contact-title">Let’s build your next portfolio.</h2>
          <p className="contact-text">
            Available for freelance work, product sites, and creative web builds.
            Reach out to discuss your next idea.
          </p>
        </div>
        <a className="contact-link" href="mailto:hello@example.com">hello@example.com</a>
      </section>
    </main>
  )
}

export default Home
