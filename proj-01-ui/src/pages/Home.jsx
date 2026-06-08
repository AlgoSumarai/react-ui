
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
    <main id="top" className="home-page">
      <section className="hero">
        <div className="hero-copy-row">
          <div className="hero-avatar">Avatar</div>
          <div className="hero-copy">
            <p className="eyebrow">Resume & portfolio</p>
            <h1 className="hero-title">Sennelo Mulanga Gundo</h1>
            <p className="hero-text">
              Graduate Software Engineer with hands-on experience in C#, ASP.NET MVC, .NET Web API, SQL,
              Entity Framework, and LINQ. I build reliable backend systems and polished front-end
              interfaces while working across the software development life cycle.
            </p>
          <div className="hero-actions">
            <button className="primary-button" type="button" onClick={() => scrollToSection('experience')}>
              View experience
            </button>
            <button className="secondary-button" type="button" onClick={() => scrollToSection('contact')}>
              Contact me
            </button>
          </div>
        </div>
      </div>

        <div className="hero-visual">
          <div className="visual-copy">
            <p className="visual-copy-label">Software Engineer</p>
            <h2 className="visual-title">C# · ASP.NET · Web API · SQL</h2>
            <p className="visual-subtitle">
              Delivering practical enterprise and educational software through clean architecture,
              strong database design, and thoughtful front-end work.
            </p>
          </div>
        </div>

        <div className="hero-stat-grid">
          <article className="stat-card">
            <p className="stat-value">2025</p>
            <p className="stat-label">BSc Information Technology</p>
          </article>
          <article className="stat-card">
            <p className="stat-value">Junior</p>
            <p className="stat-label">Software Engineer</p>
          </article>
          <article className="stat-card">
            <p className="stat-value" style={{ fontSize: '1.45rem' }}>
              mgsennelo@gmail.com
            </p>
            <p className="stat-label">Email</p>
          </article>
        </div>
      </section>

      <section id="summary">
        <h2 className="section-heading">Summary</h2>
        <p className="section-subtitle">
          Graduate Software Engineer experienced in ASP.NET MVC, .NET Web API, SQL, Entity Framework,
          and LINQ. Comfortable working on bug fixes, testing, and learning existing codebases in
          collaborative environments.
        </p>
      </section>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
        <section id="education">
          <h2 className="section-heading">Education</h2>
          <div className="project-grid">
            <article className="project-card">
              <div>
                <h3 className="project-title">University of Johannesburg</h3>
                <p className="project-text">
                  Bachelor of Science in Information Technology
                  <br />Auckland Park, Johannesburg
                  <br />Feb. 2021 – Jul. 2025
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="experience">
          <h2 className="section-heading">Experience</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3 className="project-title">Junior Software Engineer</h3>
              <p className="project-text">
                TheRad · Remote | Sep. 2025 – Apr. 2026
              </p>
              <p className="project-text">
                • Solely developed a web-based learning platform with 26 math games using HTML, CSS, and JavaScript.
                <br />• Assisted in building a modular ERP system for a manufacturing client with Laravel and Filament.
                <br />• Maintained and debugged an existing Joomla/PHP production site, improving stability.
                <br />• Gained experience across development, debugging, testing, and deployment.
              </p>
            </article>
          </div>
        </section>

      </div>

      <section id="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="project-grid">
          <article className="project-card">
            <div>
              <h3 className="project-title">KitchenBuddy API</h3>
              <p className="project-text">
                ASP.NET Core Web API using C#, Entity Framework, LINQ, and SQL to expose RESTful backend
                endpoints for a recipe and kitchen management experience.
              </p>
            </div>
            <p className="project-meta">ASP.NET Core · Web API · SQL Server</p>
            <a className="project-link" href="https://github.com/AlgoSumarai/KitchenBuddy-API" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>

          <article className="project-card">
            <div>
              <h3 className="project-title">OJGroceries</h3>
              <p className="project-text">
                Full-stack ASP.NET MVC e-commerce system with product listings, checkout flows, and
                SQL-backed order management.
              </p>
            </div>
            <p className="project-meta">ASP.NET MVC · C# · HTML · CSS · SQL</p>
            <a className="project-link" href="https://github.com/AlgoSumarai/OJGroceries" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>

          <article className="project-card">
            <div>
              <h3 className="project-title">Rhoo Transport Management System</h3>
              <p className="project-text">
                Capstone project featuring SQL-backed data models and backend business logic for a
                transport operations system.
              </p>
            </div>
            <p className="project-meta">Database design · backend logic · system architecture</p>
            <a className="project-link" href="https://github.com/AlgoSumarai/Rhoo-Transport-Management-System" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>

          <article className="project-card">
            <div>
              <h3 className="project-title">SnakeAI</h3>
              <p className="project-text">
                Reinforcement learning project using Python and PyTorch to implement training loops and
                decision logic for an AI-controlled snake game.
              </p>
            </div>
            <p className="project-meta">Python · PyTorch · AI · problem solving</p>
            <a className="project-link" href="https://github.com/AlgoSumarai/SnakeAI" target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-heading">Programming skills</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3 className="feature-title">Languages</h3>
            <p className="feature-text">C#, Java, JavaScript, Python, SQL</p>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Web</h3>
            <p className="feature-text">ASP.NET MVC, .NET Web API, HTML, CSS</p>
          </article>
          <article className="feature-card">
            <h3 className="feature-title">Databases & tools</h3>
            <p className="feature-text">SQL Server, MySQL, Entity Framework, LINQ, Git, Postman</p>
          </article>
        </div>
      </section>

      <section id="contact" className="contact-card">
        <div>
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-text">
            Email: mgsennelo@gmail.com
            <br />Mobile: 069-794-9195
          </p>
          <p className="contact-text">
            GitHub: github.com/AlgoSumarai
            <br />LinkedIn: linkedin.com/in/mulangasennelo
          </p>
        </div>
        <a className="contact-link" href="mailto:mgsennelo@gmail.com">Send an email</a>
      </section>
    </main>
  )
}

export default Home
