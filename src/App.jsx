import profile from "./assets/profile.jpg.jpeg";
import "./index.css";

function App() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">

      <nav className="navbar">
        <h2 className="logo">Imasha.dev</h2>

        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Open navigation menu"
          onClick={() => {
            document.body.classList.toggle('mobile-nav-open');
          }}
        >
          <span aria-hidden="true">☰</span>
        </button>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#qualification">Qualification</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button
              type="button"
              className="download-btn"
              onClick={() => { window.location.href = '/resume.html'; }}
            >
              View CV
            </button>
          </li>
        </ul>
      </nav>


      <section className="hero" id="home">
      <img src={profile} alt="Imasha" className="profile-image" />
        <h1>
          Hi, I'm <span>Imasha</span>
        </h1>

        <p>
          A passionate Data Science student and web developer
          focused on building modern web applications and
          solving real-world problems with technology.
        </p>

        <div className="hero-actions">
          <button type="button" onClick={scrollToProjects} className="primary-cta">
            <span className="cta-icon" aria-hidden="true">→</span>
            Explore My Work
          </button>
          <button
            type="button"
            className="secondary-cta"
            onClick={() => { window.location.href = '/resume.html'; }}
          >
            <span className="cta-icon" aria-hidden="true">⬇</span>
            View CV
          </button>
        </div>

      </section>

      <section className="card" id="about">
        <h2>About Me</h2>

        <p>
          I am a third-year Data Science student at EASTC with
          strong interest in software development, machine learning,
          and artificial intelligence.
        </p>
      </section>

      <section className="card" id="qualification">
        <h2>Education</h2>

        <div className="stack">
          <div className="stack-item">
            <div className="stack-meta">
              <span className="stack-year">2022 - Present</span>
            </div>
            <div className="stack-body">
              <h3>Bachelor of Science in Data Science</h3>
              <p className="muted" style={{ color: "#000" }}>
                EASTC — coursework in statistics, programming, and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="card" id="skills">
        <h2>Skills</h2>

        <div className="skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>R</span>
          <span>PHP Yii2</span>
          <span>Data Science</span>
          <span>Machine Learning</span>
          <span>Cloud Computing</span>
          <span>Git & GitHub</span>
          <span>SQL</span>
          <span>R programming language</span>
        </div>
      </section>

      <section className="card" id="projects">

  <h2>Projects</h2>

  <div className="project">
    <h3>Post Session Learning Platform</h3>

    <p>
      A learning management platform developed using PHP Yii2
      to help students access learning materials and feedback.
    </p>
  </div>

  <div className="project">
    <h3>Community Emergency Alert System</h3>

    <p>
      A web-based emergency communication system for sending
      alerts and improving rapid response services.
    </p>
  </div>

  <div className="project">
    <h3>Student Early Warning System</h3>

    <p>
      Predicts students at risk of failing and dropping out by
      analyzing academic performance and engagement data.
    </p>
  </div>

  <div className="project">
    <h3>Personal Portfolio Website</h3>

    <p>
      A modern responsive portfolio website built using React
      and deployed using Vercel.
    </p>
  </div>

  <div className="project">
    <h3>Pharmacy Inventory Management System</h3>

    <p>
      A simple inventory system for tracking medicine stock,
      sales, and expiry dates.
    </p>
  </div>

</section>

      <section className="card contact" id="contact">
        <h2>Contact</h2>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              <span className="contact-icon" aria-hidden="true">✉</span>
              Email: <a href="mailto:iddyimasha@gmail.com">iddyimasha@gmail.com</a>
            </p>
            <p>
              <span className="contact-icon" aria-hidden="true">☎</span>
              Phone: <a href="tel:+256679465877">0679465877</a> / <a href="tel:+256616315877">0616315877</a>
            </p>
            <p>
              <span className="contact-icon" aria-hidden="true">⌖</span>
              Address: Dar es Salaam, Tanzania
            </p>
            <p>GitHub: <a href="https://github.com/iddyimasha-sys" target="_blank" rel="noreferrer">github.com/iddyimasha-sys</a></p>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');

              // Demo behavior: opens mail client (no backend required)
              window.location.href = `mailto:iddyimasha@gmail.com?subject=${encodeURIComponent(
                `Portfolio message from ${name || 'visitor'}`
              )}&body=${encodeURIComponent(`Email: ${email}\n\n${message}`)}`;
            }}
          >
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" required placeholder="Your name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required placeholder="you@example.com" />
              </label>
            </div>

            <label className="form-message">
              Message
              <textarea name="message" required rows="5" placeholder="Write your message..." />
            </label>

            <button type="submit" className="primary-cta">
              <span className="cta-icon" aria-hidden="true">✈</span>
              Send Message
            </button>
          </form>
        </div>
      </section>


      <footer className="footer">
        <p>Imasha — © 2026 Imasha Portfolio. All rights reserved.</p>
        <div className="footer-links" aria-label="Social links">
          <a className="social-icon" href="https://github.com/iddyimasha-sys" target="_blank" rel="noreferrer" aria-label="GitHub">
            <span className="social-dot" aria-hidden="true">GH</span>
          </a>
          <a className="social-icon" href="#" aria-label="LinkedIn">
            <span className="social-dot" aria-hidden="true">in</span>
          </a>
          <a className="social-icon" href="mailto:iddyimasha@example.com" aria-label="Email">
            <span className="social-dot" aria-hidden="true">@</span>
          </a>
          <a className="social-icon" href="#" aria-label="Instagram">
            <span className="social-dot" aria-hidden="true">IG</span>
          </a>
          <a className="social-icon" href="#" aria-label="Facebook">
            <span className="social-dot" aria-hidden="true">f</span>
          </a>
        </div>

      </footer>


    </div>
  );
}

export default App;
