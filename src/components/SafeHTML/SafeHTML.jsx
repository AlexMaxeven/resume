/**
 * Компонент для безпечного рендерингу HTML контенту
 * Використовує DOMPurify для захисту від XSS атак
 */

import { useMemo } from 'react';
import { sanitizeHTML } from '../../utils/sanitize';
import styles from './SafeHTML.module.css';

/**
 * SafeHTML - компонент для безпечного відображення HTML
 * 
 * @param {string} content - HTML контент для відображення
 * @param {string} className - Додаткові CSS класи
 * @param {Object} sanitizeOptions - Додаткові опції для санітизації
 * @param {string} tag - HTML тег для обгортки (за замовчуванням 'div')
 */
const SafeHTML = ({ 
  content, 
  className = '', 
  sanitizeOptions = {},
  tag = 'div'
}) => {
  // Мемоізуємо санітизований контент, щоб не робити це на кожному рендері
  const sanitizedContent = useMemo(() => {
    if (!content) return '';
    return sanitizeHTML(content, sanitizeOptions);
  }, [content, sanitizeOptions]);

  // Використовуємо dangerouslySetInnerHTML, але з попередньо санітизованим контентом
  const Tag = tag;
  
  return (
    <Tag
      className={`${styles.safeHTML} ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default SafeHTML;

