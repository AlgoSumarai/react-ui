import { useState, useEffect } from 'react'
import './ProjectsCarousel.css'

const projects = [
  {
    title: 'KitchenBuddy API',
    text:
      'ASP.NET Core Web API using C#, Entity Framework, LINQ, and SQL to expose RESTful backend endpoints for a recipe and kitchen management experience.',
    meta: 'ASP.NET Core · Web API · SQL Server',
    link: 'https://github.com/AlgoSumarai/KitchenBuddy-API'
  },
  {
    title: 'OJGroceries',
    text:
      'Full-stack ASP.NET MVC e-commerce system with product listings, checkout flows, and SQL-backed order management.',
    meta: 'ASP.NET MVC · C# · HTML · CSS · SQL',
    link: 'https://github.com/AlgoSumarai/OJGroceries'
  },
  {
    title: 'Rhoo Transport Management System',
    text:
      'Capstone project featuring SQL-backed data models and backend business logic for a transport operations system.',
    meta: 'Database design · backend logic · system architecture',
    link: 'https://github.com/AlgoSumarai/Rhoo-Transport-Management-System'
  },
  {
    title: 'SnakeAI',
    text:
      'Reinforcement learning project using Python and PyTorch to implement training loops and decision logic for an AI-controlled snake game.',
    meta: 'Python · PyTorch · AI · problem solving',
    link: 'https://github.com/AlgoSumarai/SnakeAI'
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
            <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
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
