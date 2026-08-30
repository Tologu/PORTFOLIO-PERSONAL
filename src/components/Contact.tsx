import React, { useState } from 'react';
import { LINKS } from '../data/links';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/Contact.css';

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${LINKS.email}`;

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    payload.append('_subject', t.contact.subject(formData.name, formData.email));
    payload.append('_replyto', formData.email);
    payload.append('_template', 'table');
    payload.append('_captcha', 'false');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(t.contact.submitError);
      }

      setFormStatus({
        type: 'success',
        message: t.contact.success,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormStatus({
        type: 'error',
        message: t.contact.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.description}</p>
            <div className="contact-email-card">
              <span className="contact-email-label">{t.contact.directEmail}</span>
              <a href={`mailto:${LINKS.email}`} className="contact-email-link">
                {LINKS.email}
              </a>
            </div>
            <div className="social-links">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="contact-name">{t.contact.nameLabel}</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder={t.contact.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
            <label htmlFor="contact-email">{t.contact.emailLabel}</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder={t.contact.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
            <label htmlFor="contact-message">{t.contact.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={t.contact.messagePlaceholder}
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
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
