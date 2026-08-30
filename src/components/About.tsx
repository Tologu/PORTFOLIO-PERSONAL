import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/About.css';

const About: React.FC = () => {
  const { t } = useLanguage();
  const skills = ['HTML5 & CSS3', 'JavaScript', 'TypeScript', 'React', 'Vite', 'Node.js', 'Git', 'Responsive'];

  return (
    <section id="about" className="about">
      <div className="section-inner">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-lead">{t.about.lead}</p>
            <h3>{t.about.aiTitle}</h3>
            <p className="about-ai">{t.about.aiText}</p>
            <h3>{t.about.extraTitle}</h3>
            <ul className="about-points">
              <li>{t.about.b1}</li>
              <li>{t.about.b2}</li>
              <li>{t.about.b3}</li>
            </ul>
          </div>
          <div className="skills">
            <h3>{t.about.skills}</h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <h3 className="tools-heading">{t.about.tools}</h3>
            <ul className="skills-list">
              {t.about.toolsItems.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
