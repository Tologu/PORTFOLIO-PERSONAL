import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Header.css';

interface HeaderProps {
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="header">
      <div className="header-container">
        <button type="button" className="logo" onClick={() => go('hero')}>
          Tomás López Gutiérrez
        </button>

        <nav id="site-nav" className={`nav ${menuOpen ? 'is-open' : ''}`}>
          <button type="button" onClick={() => go('hero')} className="nav-link">{t.header.home}</button>
          <button type="button" onClick={() => go('projects')} className="nav-link">{t.header.projects}</button>
          <button type="button" onClick={() => go('about')} className="nav-link">{t.header.about}</button>
          <button type="button" onClick={() => go('contact')} className="nav-link">{t.header.contact}</button>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${language === 'es' ? 'active' : ''}`}
              onClick={() => setLanguage('es')}
              aria-pressed={language === 'es'}
            >
              ES
            </button>
            <span className="lang-divider" aria-hidden="true">/</span>
            <button
              type="button"
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? t.header.close : t.header.menu}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
