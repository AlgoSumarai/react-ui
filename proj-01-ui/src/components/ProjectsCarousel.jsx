import { useState, useEffect } from 'react'
import './ProjectsCarousel.css'

const projects = [
  {
    title: 'KitchenBuddy API',
    text:
      'ASP.NET Core Web API using C#, Entity Framework, LINQ, and SQL to expose RESTful backend endpoints for a recipe and kitchen management experience.',
    meta: 'ASP.NET Core · Web API · SQL Server',
    link: 'https://github.com/AlgoSumarai/KitchenBuddyAPI'
  },
  {
    title: 'OJGroceries',
    text:
      'Full-stack ASP.NET MVC e-commerce system with product listings, checkout flows, and SQL-backed order management.',
    meta: 'ASP.NET MVC · C# · HTML · CSS · SQL',
    link: 'https://youtu.be/ZOF0NhomNN0?si=r3YHhnXEt-4JXSmJ',
    linkLabel: 'Watch video'
  },
  {
    title: 'Rhoo Transport Management System',
    text:
      'Capstone project featuring SQL-backed data models and backend business logic for a transport operations system.',
    meta: 'Database design · backend logic · system architecture'
  },
  {
    title: 'SnakeAI',
    text:
      'Reinforcement learning project using Python and PyTorch to implement training loops and decision logic for an AI-controlled snake game.',
    meta: 'Python · PyTorch · AI · problem solving',
    link: 'https://github.com/AlgoSumarai/snake-ai-pytorch'
  }
]

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0)
  const SLIDE_WIDTH = 100 // percent of carousel width per slide (one slide visible)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setIndex((i) => (i + 1) % projects.length)

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * SLIDE_WIDTH}%)` }}
      >
        {projects.map((p, i) => (
          <article key={i} className="project-card carousel-slide">
            <div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-text">{p.text}</p>
            </div>
            <p className="project-meta">{p.meta}</p>
            {p.link && (
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                {p.link.includes('github.com') ? (
                  <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.99-.399 3.01-.404 1.02.005 2.05.137 3.01.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.803 5.62-5.475 5.92.43.371.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .319.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ) : p.link.includes('youtu.be') || p.link.includes('youtube.com') ? (
                  <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M23.498 6.186a2.998 2.998 0 0 0-2.105-2.114C19.462 3.5 12 3.5 12 3.5s-7.462 0-9.393.572A2.998 2.998 0 0 0 .502 6.186 31.05 31.05 0 0 0 0 12a31.05 31.05 0 0 0 .502 5.814 2.998 2.998 0 0 0 2.105 2.114C4.538 20.5 12 20.5 12 20.5s7.462 0 9.393-.572a2.998 2.998 0 0 0 2.105-2.114A31.05 31.05 0 0 0 24 12a31.05 31.05 0 0 0-.502-5.814zM9.75 15.02V8.98L15.75 12l-6 3.02z" />
                  </svg>
                ) : (
                  <svg className="project-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
                {p.linkLabel || 'View on GitHub'}
              </a>
            )}
          </article>
        ))}
      </div>

      <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>
      <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>

      <div className="carousel-indicators">
        {projects.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
