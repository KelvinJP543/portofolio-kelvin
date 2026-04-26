import React from 'react';
import './App.css';

import profil from './assets/foto-profil.jpg'; 
import refood from './assets/refood-home.png';
import coopconnect from './assets/coopconnect-dashboard.jpg';

const App = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 
    'RESTful API', 'Express.js', 'PHP', 'MySQL', 'CodeIgniter'
  ];

  const projects = [
    {
      title: 'Food Waste Classification Web App (Refood)',
      description: 'A food waste classification information system and website using deep learning methods.',
      image: refood, 
      highlights: [
        'Developed a backend using a RESTful API with the Node.js (Hapi) framework and deployed it to AWS EC2.',
        'Implemented caching and a Progressive Web App (PWA) for performance and offline support.',
        'Integrated classification features using a Convolutional Neural Network (CNN) method.'
      ],
      link: 'https://refood-apps.vercel.app/'
    },
    {
      title: 'School Cooperative Management System (CoopConnect)',
      description: 'Information system for school cooperative management.',
      image: coopconnect, 
      highlights: [
        'Implemented core functions such as transaction processing and inventory management.',
        'Developed financial reporting features and user access control.',
        'Built using CodeIgniter 3 framework.'
      ],
      link: null
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Kelvin Jaya Pratama</h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
              Graduated from AMIKOM Yogyakarta University majoring in Information Systems (GPA: 3.97), with a strong passion for web development. 
              Experienced in building full-stack websites using modern web technologies. 
              Committed to continuous learning and contributing to innovative web solutions.
            </p>
          </div>
          <div className="hero-image-container">
            <img 
              src={profil} 
              alt="Foto Profil Kelvin" 
              className="profile-image" 
            />
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h3 className="section-title">Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h3 className="section-title">Project Experience</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image" 
                />

                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p className="project-desc">{project.description}</p>
                  <ul>
                    {project.highlights.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="footer-section">
        <div className="container">
          <p>Open to opportunities and collaborations.</p>
          <div className="contact-links">
            <a href="mailto:kevin.pratama301@gmail.com">kevin.pratama301@gmail.com</a>
            <span className="divider">|</span>
            <a href="https://linkedin.com/in/kelvin-jaya-pratama" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;