/**
 * Утиліти для захисту від CSRF (Cross-Site Request Forgery) атак
 * 
 * CSRF - це атака, коли зловмисний сайт виконує дії від імені авторизованого користувача
 */

/**
 * Генерує CSRF токен
 * @returns {string} - Випадковий токен
 */
export const generateCSRFToken = () => {
  // Генеруємо випадковий токен з 32 символів
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Зберігає CSRF токен в localStorage
 * @param {string} token - CSRF токен
 */
export const storeCSRFToken = (token) => {
  try {
    localStorage.setItem('csrf_token', token);
    // Також встановлюємо в cookie для серверної перевірки (якщо потрібно)
    document.cookie = `csrf_token=${token}; path=/; SameSite=Strict; Secure`;
  } catch (error) {
    console.error('Помилка збереження CSRF токену:', error);
  }
};

/**
 * Отримує CSRF токен з localStorage
 * @returns {string|null} - CSRF токен або null
 */
export const getCSRFToken = () => {
  try {
    return localStorage.getItem('csrf_token');
  } catch (error) {
    console.error('Помилка отримання CSRF токену:', error);
    return null;
  }
};

/**
 * Ініціалізує CSRF токен (генерує та зберігає, якщо його немає)
 * @returns {string} - CSRF токен
 */
export const initCSRFToken = () => {
  let token = getCSRFToken();
  if (!token) {
    token = generateCSRFToken();
    storeCSRFToken(token);
  }
  return token;
};

/**
 * Додає CSRF токен до заголовків запиту
 * @param {Headers|Object} headers - Об'єкт заголовків
 * @returns {Headers|Object} - Заголовки з CSRF токеном
 */
export const addCSRFToHeaders = (headers = {}) => {
  const token = getCSRFToken();
  if (!token) {
    console.warn('CSRF токен не знайдено. Ініціалізуйте його перед використанням.');
    return headers;
  }

  if (headers instanceof Headers) {
    headers.set('X-CSRF-Token', token);
  } else {
    headers['X-CSRF-Token'] = token;
  }

  return headers;
};

/**
 * Створює безпечний fetch запит з CSRF захистом
 * @param {string} url - URL для запиту
 * @param {Object} options - Опції для fetch
 * @returns {Promise<Response>} - Promise з відповіддю
 */
export const secureFetch = async (url, options = {}) => {
  const token = getCSRFToken();
  
  const headers = new Headers(options.headers || {});
  if (token) {
    headers.set('X-CSRF-Token', token);
  }

  // Додаємо Content-Type для POST/PUT/PATCH запитів
  if (['POST', 'PUT', 'PATCH'].includes(options.method?.toUpperCase())) {
    if (!headers.has('Content-Type')) {
      headers.set('Content-Type', 'application/json');
    }
  }

  return fetch(url, {
    ...options,
    headers,
    credentials: 'same-origin' // Важливо для CSRF захисту
  });
};

/**
 * Валідує CSRF токен
 * @param {string} token - Токен для перевірки
 * @returns {boolean} - true якщо токен валідний
 */
export const validateCSRFToken = (token) => {
  const storedToken = getCSRFToken();
  if (!storedToken || !token) {
    return false;
  }
  return storedToken === token;
};

