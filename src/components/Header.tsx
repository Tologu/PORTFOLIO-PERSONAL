import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Tomás López Gutiérrez</div>
        <nav className="nav">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Sobre mí</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
