import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/About.css';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <p>{t.about.p3}</p>
          <p>{t.about.p4}</p>
        </div>
        <div className="skills">
          <h3>{t.about.skills}</h3>
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
