import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el email
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje. Te contactaré pronto!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>¡Hablemos!</h3>
          <p>Estoy disponible para oportunidades y proyectos interesantes.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:tomas@example.com" className="social-link">
              Email
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
