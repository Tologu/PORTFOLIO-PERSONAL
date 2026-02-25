import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">Sobre mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Soy estudiante de Desarrollo de Aplicaciones Web (DAW) con pasión por crear aplicaciones
            web modernas y funcionales. Tengo experiencia en frontend y estoy expandiendo mis 
            habilidades en backend.
          </p>
          <p>
            Mi objetivo es desarrollar soluciones innovadoras que resuelvan problemas reales y 
            proporcionen una excelente experiencia de usuario.
          </p>
        </div>
        <div className="skills">
          <h3>Habilidades</h3>
          <ul className="skills-list">
            <li>HTML5 & CSS3</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Vite</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
