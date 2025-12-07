/**
 * Демонстраційна контактна форма з захистом від XSS та CSRF
 * Показує практичне застосування DOMPurify та CSRF токенів
 */

import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { sanitizeHTML, sanitizeText, sanitizeURL, containsDangerousContent } from '../../utils/sanitize';
import { initCSRFToken, getCSRFToken, secureFetch } from '../../utils/csrf';
import SafeHTML from '../SafeHTML/SafeHTML';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [preview, setPreview] = useState('');
  const [isDangerous, setIsDangerous] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Ініціалізуємо CSRF токен при завантаженні компонента
  useEffect(() => {
    const token = initCSRFToken();
    setCsrfToken(token);
  }, []);

  // Перевіряємо введений текст на небезпечний контент
  useEffect(() => {
    if (formData.message) {
      const dangerous = containsDangerousContent(formData.message);
      setIsDangerous(dangerous);
      
      if (dangerous) {
        // Показуємо попередження, але все одно санітизуємо
        const sanitized = sanitizeHTML(formData.message);
        setPreview(sanitized);
      } else {
        setPreview(sanitizeHTML(formData.message));
      }
    } else {
      setPreview('');
      setIsDangerous(false);
    }
  }, [formData.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Санітизуємо введені дані залежно від поля
    let sanitizedValue = value;
    
    if (name === 'email') {
      // Для email просто видаляємо HTML
      sanitizedValue = sanitizeText(value);
    } else if (name === 'name') {
      // Для імені також тільки текст
      sanitizedValue = sanitizeText(value);
    } else if (name === 'message') {
      // Для повідомлення залишаємо як є (буде санітизовано при відображенні)
      sanitizedValue = value;
    }

    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    // Перевірка на небезпечний контент
    if (containsDangerousContent(formData.message)) {
      setError(t.contactForm.errorDangerous);
    }

    // Валідація форми
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError(t.contactForm.errorRequired);
      return;
    }

    // Санітизуємо всі дані перед відправкою
    const sanitizedData = {
      name: sanitizeText(formData.name),
      email: sanitizeText(formData.email),
      message: sanitizeHTML(formData.message),
      csrf_token: getCSRFToken()
    };

    try {
      // Демонстрація безпечного запиту з CSRF захистом
      // У реальному проекті тут був би реальний API endpoint
      console.log('Відправка безпечних даних:', sanitizedData);
      
      // Приклад використання secureFetch (закоментовано, бо немає реального API)
      /*
      const response = await secureFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(sanitizedData)
      });
      
      if (!response.ok) {
        throw new Error('Помилка відправки форми');
      }
      */

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setPreview('');
      
      // Симуляція успішної відправки
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(t.contactForm.errorSubmit);
      console.error('Помилка:', err);
    }
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>{t.contactForm.title}</h3>
        <p className={styles.formDescription}>
          {t.contactForm.description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* CSRF токен (прихований) */}
        <input type="hidden" name="csrf_token" value={csrfToken} />

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            {t.contactForm.name}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder={t.contactForm.namePlaceholder}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            {t.contactForm.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            {t.contactForm.message}
            {isDangerous && (
              <span className={styles.warning}> {t.contactForm.warning}</span>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${isDangerous ? styles.textareaDangerous : ''}`}
            placeholder={t.contactForm.messagePlaceholder}
            rows={5}
            required
          />
          <small className={styles.hint}>
            {t.contactForm.hint}
          </small>
        </div>

        {/* Попередній перегляд (безпечний) */}
        {preview && (
          <div className={styles.preview}>
            <h4 className={styles.previewTitle}>{t.contactForm.previewTitle}</h4>
            <div className={styles.previewContent}>
              <SafeHTML content={preview} />
            </div>
          </div>
        )}

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

        {submitted && (
          <div className={styles.success}>
            {t.contactForm.success}
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          {t.contactForm.submit}
        </button>

        <div className={styles.securityInfo}>
          <h4 className={styles.securityTitle}>{t.contactForm.securityTitle}</h4>
          <ul className={styles.securityList}>
            {t.contactForm.securityItems.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: `✅ ${item}` }} />
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

