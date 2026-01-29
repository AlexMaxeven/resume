import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Зберігаємо вибір мови в localStorage
    // При першому відкритті завжди українська мова
    const savedLanguage = localStorage.getItem('language');
    // Перевіряємо, чи збережена мова валідна (тільки 'uk' або 'en')
    if (savedLanguage === 'uk' || savedLanguage === 'en') {
      return savedLanguage;
    }
    // Якщо немає збереженої мови або вона невалідна - за замовчуванням українська
    return 'uk';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'uk' ? 'en' : 'uk');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

