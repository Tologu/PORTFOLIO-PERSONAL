import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Tomas Dev. Todos los derechos reservados.</p>

      </div>
    </footer>
  );
};

export default Footer;
