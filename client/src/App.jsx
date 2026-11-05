import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function Home() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Career<span>Connect</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#jobs">Find Jobs</a>
          <a href="#internships">Internships</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <span className="tagline">
            YOUR CAREER, YOUR FUTURE
          </span>

          <h1>
            Find Your Dream Job
            <span> & Build Your Future</span>
          </h1>

          <p>
            Discover exciting job opportunities and internships.
            Connect with top companies and take the next step
            in your professional journey.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Explore Jobs →
            </button>
            <button className="secondary-btn">
              Find Internships
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>1000+</h3>
              <p>Job Opportunities</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Companies</p>
            </div>
            <div>
              <h3>2000+</h3>
              <p>Job Seekers</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">💼</div>
          <h2>Your Next Opportunity</h2>
          <p>Great careers start with great opportunities.</p>

          <div className="opportunity">
            <span>🚀</span>
            <div>
              <h4>Software Developer</h4>
              <p>Full-time · Remote</p>
            </div>
          </div>

          <div className="opportunity">
            <span>🎯</span>
            <div>
              <h4>Frontend Intern</h4>
              <p>Internship · Hybrid</p>
            </div>
          </div>

          <div className="opportunity">
            <span>🌟</span>
            <div>
              <h4>Web Developer</h4>
              <p>Full-time · On-site</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="jobs">
        <h2>Explore Career Opportunities</h2>
        <p>Find opportunities that match your skills and interests.</p>

        <div className="category-grid">
          <div className="category-card">
            <span>💻</span>
            <h3>Software Development</h3>
            <p>Explore developer opportunities</p>
          </div>

          <div className="category-card">
            <span>🎨</span>
            <h3>Web Development</h3>
            <p>Build your frontend career</p>
          </div>

          <div className="category-card">
            <span>📊</span>
            <h3>Data & Analytics</h3>
            <p>Discover data-driven careers</p>
          </div>

          <div className="category-card" id="internships">
            <span>🎓</span>
            <h3>Internships</h3>
            <p>Start your professional journey</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about">
        <h2>Career<span>Connect</span></h2>
        <p>Connecting talent with opportunities.</p>
        <p>© 2026 CareerConnect. All rights reserved.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App;