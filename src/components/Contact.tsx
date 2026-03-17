import React, { useState } from 'react';
import '../styles/Contact.css';

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/webdev.tomaslopezgutierrez@gmail.com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (formStatus) {
      setFormStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setFormStatus(null);

    const payload = new FormData();
    payload.append('name', formData.name);
    payload.append('email', formData.email);
    payload.append('message', formData.message);
    payload.append('_subject', `Nuevo mensaje de ${formData.name} (${formData.email})`);
    payload.append('_replyto', formData.email);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('No se pudo enviar el mensaje.');
      }

      setFormStatus({
        type: 'success',
        message: 'Mensaje enviado correctamente. Te responderé por correo lo antes posible.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Hubo un problema al enviar el mensaje. Intenta de nuevo en unos minutos o escríbeme directamente al correo.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contacto</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>¡Hablemos!</h3>
          <p>Estoy disponible para oportunidades y proyectos interesantes.</p>
          <div className="contact-email-card">
            <span className="contact-email-label">Correo directo</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=webdev.tomaslopezgutierrez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email-link"
            >
              webdev.tomaslopezgutierrez@gmail.com
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Tologu" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tom%C3%A1s-l%C3%B3pez-guti%C3%A9rrez-0338b0140/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
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
            disabled={isSubmitting}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
          {formStatus && (
            <p className={`form-status ${formStatus.type}`} role="status">
              {formStatus.message}
            </p>
          )}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
