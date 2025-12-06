/**
 * Демонстраційна контактна форма з захистом від XSS та CSRF
 * Показує практичне застосування DOMPurify та CSRF токенів
 */

import { useState, useEffect } from 'react';
import { sanitizeHTML, sanitizeText, sanitizeURL, containsDangerousContent } from '../../utils/sanitize';
import { initCSRFToken, getCSRFToken, secureFetch } from '../../utils/csrf';
import SafeHTML from '../SafeHTML/SafeHTML';
import styles from './ContactForm.module.css';

const ContactForm = () => {
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
      setError('⚠️ Виявлено потенційно небезпечний контент! Він буде автоматично очищено.');
    }

    // Валідація форми
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Будь ласка, заповніть всі поля');
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
      setError('Помилка відправки форми. Спробуйте ще раз.');
      console.error('Помилка:', err);
    }
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Демонстрація захисту від XSS/CSRF</h3>
        <p className={styles.formDescription}>
          Ця форма демонструє захист від XSS (DOMPurify) та CSRF (токени).
          Спробуйте ввести небезпечний код у повідомлення, щоб побачити захист у дії.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* CSRF токен (прихований) */}
        <input type="hidden" name="csrf_token" value={csrfToken} />

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Ім'я
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Ваше ім'я"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
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
            Повідомлення
            {isDangerous && (
              <span className={styles.warning}> ⚠️ Виявлено небезпечний контент!</span>
            )}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${isDangerous ? styles.textareaDangerous : ''}`}
            placeholder="Введіть повідомлення... Спробуйте: &lt;script&gt;alert('XSS')&lt;/script&gt;"
            rows={5}
            required
          />
          <small className={styles.hint}>
            💡 Спробуйте ввести: &lt;script&gt;alert('XSS')&lt;/script&gt; або &lt;img src=x onerror=alert(1)&gt;
          </small>
        </div>

        {/* Попередній перегляд (безпечний) */}
        {preview && (
          <div className={styles.preview}>
            <h4 className={styles.previewTitle}>Попередній перегляд (безпечний HTML):</h4>
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
            ✅ Форма успішно відправлена! (Демонстрація)
          </div>
        )}

        <button type="submit" className={styles.submitButton}>
          Відправити (з CSRF захистом)
        </button>

        <div className={styles.securityInfo}>
          <h4 className={styles.securityTitle}>🔒 Застосовані заходи безпеки:</h4>
          <ul className={styles.securityList}>
            <li>✅ <strong>DOMPurify</strong> - санітизація HTML контенту</li>
            <li>✅ <strong>CSRF токен</strong> - захист від міжсайтових запитів</li>
            <li>✅ <strong>Валідація вводу</strong> - перевірка на небезпечні патерни</li>
            <li>✅ <strong>Безпечний рендеринг</strong> - використання SafeHTML компонента</li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

