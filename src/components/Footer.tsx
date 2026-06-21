import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Tomas Dev. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
