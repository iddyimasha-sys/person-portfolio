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

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
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

        <button type="button" onClick={scrollToProjects}>Explore My Work</button>
      </section>

      <section className="card" id="about">
        <h2>About Me</h2>

        <p>
          I am a third-year Data Science student at EASTC with
          strong interest in software development, machine learning,
          and artificial intelligence.
        </p>
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

        <p>Email: <a href="mailto:iddyimasha@example.com">iddyimasha@example.com</a></p>
        <p>Phone: <a href="tel:+256679465877">0679465877</a> / <a href="tel:+256616315877">0616315877</a></p>
        <p>GitHub: <a href="https://github.com/iddyimasha-sys" target="_blank" rel="noreferrer">github.com/iddyimasha-sys</a></p>
      </section>

      <footer className="footer">
        <p>© 2026 Imasha Portfolio. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
