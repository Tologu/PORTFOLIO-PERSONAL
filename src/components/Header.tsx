import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Header.css';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Tomás López Gutiérrez</div>
        <div className="header-right">
          <nav className="nav">
            <button onClick={() => scrollToSection('hero')} className="nav-link">{t.header.home}</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">{t.header.projects}</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">{t.header.about}</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">{t.header.contact}</button>
          </nav>
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
            >
              ES
            </button>
            <span className="lang-divider" aria-hidden="true">|</span>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
