import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      {/* Objetos flotantes en el fondo */}
      <div className="hero-bg">
        <div className="floating-object circle obj1" />
        <div className="floating-object circle obj2" />
        <div className="floating-object circle obj3" />
        <div className="floating-object circle obj4" />
        <div className="floating-object triangle obj5" />
        <div className="floating-object triangle obj6" />
        <div className="floating-object star obj7">
          <svg viewBox="0 0 32 32" fill="#ffe066">
            <polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12" />
          </svg>
        </div>
        <div className="floating-object star obj8">
          <svg viewBox="0 0 32 32" fill="#ffe066">
            <polygon points="16,2 20,12 31,12 22,19 25,30 16,23 7,30 10,19 1,12 12,12" />
          </svg>
        </div>
      </div>
      <div className="hero-container">
        {/* Left Column */}
        <div className="hero-left">
          <div className="hero-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.84v8.37h2.84v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.84M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.515-4.486-10-10-10z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.46 6c-.87.39-1.8.65-2.77.77 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.93-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.15 1.1-4-.2-7.64-2.14-10.04-5.08-.42.73-.66 1.57-.66 2.46 0 1.67.85 3.14 2.14 4.01-.79-.03-1.54-.24-2.19-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.91 2.41 3.3 4.53 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.77-.02-1.15-.07 2.16 1.38 4.72 2.19 7.47 2.19 8.96 0 13.85-7.42 13.85-13.85 0-.21 0-.42-.01-.63.95-.68 1.77-1.54 2.42-2.52z"/>
              </svg>
            </a>
          </div>

          <div className="hero-content">
            <p className="hero-label">It's me</p>
            <h1 className="hero-title">Tomás</h1>
            <p className="hero-subtitle">Desarrollador Web & Estudiante DAW</p>
            <p className="hero-description">
              Creo experiencias web modernas, funcionales e innovadoras. Apasionado por React, TypeScript y tecnologías web de vanguardia.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                Let's connect
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('projects')}>
                Ver mis proyectos
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-placeholder">
              {!imageError ? (
                <img 
                  src="/images/portrait.png" 
                  alt="Tomas" 
                  className="hero-image"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="hero-placeholder-content">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <p>Imagen pendiente</p>
                  <span>Coloca portrait.png en public/images/</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
