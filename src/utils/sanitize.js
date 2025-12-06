/**
 * Утиліта для санітизації HTML контенту за допомогою DOMPurify
 * Захищає від XSS (Cross-Site Scripting) атак
 */

import DOMPurify from 'dompurify';

/**
 * Санітизує HTML рядок, видаляючи небезпечні теги та атрибути
 * @param {string} dirty - Небезпечний HTML рядок
 * @param {Object} options - Додаткові опції для DOMPurify
 * @returns {string} - Безпечний HTML рядок
 */
export const sanitizeHTML = (dirty, options = {}) => {
  if (!dirty || typeof dirty !== 'string') {
    return '';
  }

  // Базові налаштування для максимального захисту
  const defaultOptions = {
    ALLOWED_TAGS: [
      'p', 'br', 'strong', 'em', 'u', 'b', 'i', 'span', 'div',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'ul', 'ol', 'li',
      'a', 'blockquote', 'code', 'pre'
    ],
    ALLOWED_ATTR: ['href', 'title', 'class', 'id'],
    ALLOW_DATA_ATTR: false, // Забороняємо data-* атрибути
    KEEP_CONTENT: true, // Зберігаємо контент, але видаляємо небезпечні теги
    RETURN_DOM: false, // Повертаємо рядок, а не DOM
    RETURN_DOM_FRAGMENT: false,
    RETURN_TRUSTED_TYPE: false,
    FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'style'],
    ...options
  };

  return DOMPurify.sanitize(dirty, defaultOptions);
};

/**
 * Санітизує простий текст (видаляє всі HTML теги)
 * @param {string} dirty - Текст з можливими HTML тегами
 * @returns {string} - Чистий текст без HTML
 */
export const sanitizeText = (dirty) => {
  if (!dirty || typeof dirty !== 'string') {
    return '';
  }

  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  });
};

/**
 * Перевіряє, чи містить рядок потенційно небезпечний контент
 * @param {string} input - Вхідний рядок
 * @returns {boolean} - true якщо виявлено потенційну загрозу
 */
export const containsDangerousContent = (input) => {
  if (!input || typeof input !== 'string') {
    return false;
  }

  const dangerousPatterns = [
    /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi, // onclick=, onerror=, тощо
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /data:text\/html/gi
  ];

  return dangerousPatterns.some(pattern => pattern.test(input));
};

/**
 * Санітизує URL, перевіряючи на javascript: та інші небезпечні протоколи
 * @param {string} url - URL для санітизації
 * @returns {string} - Безпечний URL або порожній рядок
 */
export const sanitizeURL = (url) => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  // Видаляємо пробіли
  const trimmed = url.trim();

  // Перевіряємо на небезпечні протоколи
  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  const lowerUrl = trimmed.toLowerCase();

  for (const protocol of dangerousProtocols) {
    if (lowerUrl.startsWith(protocol)) {
      return '';
    }
  }

  // Дозволяємо тільки http, https, mailto, tel
  const allowedProtocols = ['http://', 'https://', 'mailto:', 'tel:'];
  const hasAllowedProtocol = allowedProtocols.some(protocol => 
    lowerUrl.startsWith(protocol)
  );

  if (!hasAllowedProtocol && trimmed.includes('://')) {
    return '';
  }

  return trimmed;
};

