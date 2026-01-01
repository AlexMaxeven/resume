import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import styles from './Header.module.css';
import SplitText from '../SplitText/SplitText';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Блокуємо скрол сторінки та додаємо blur, коли меню відкрито
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }

    // Очищаємо при розмонтуванні
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <SplitText
            text="O.Zaverukha"
            className={styles.logoText}
            delay={80}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="left"
            tag="span"
          />
          <span className={styles.logoShort}>O.Z</span>
        </NavLink>

        <div className={styles.rightControls}>
          <div className={styles.languageSwitcher}>
            <button 
              className={`${styles.langButton} ${language === 'uk' ? styles.langButtonActive : ''}`}
              onClick={() => setLanguage('uk')}
              aria-label="Switch to Ukrainian"
            >
              UK
            </button>
            <button 
              className={`${styles.langButton} ${language === 'en' ? styles.langButtonActive : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <button 
            className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
        </div>
        
        <nav 
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
        >
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-resume`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                {t.nav.resume}
              </motion.span>
            </AnimatePresence>
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-experience`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                {t.nav.experience}
              </motion.span>
            </AnimatePresence>
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-education`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                {t.nav.education}
              </motion.span>
            </AnimatePresence>
          </NavLink>
          <NavLink 
            to="/kali" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-kali`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                {t.nav.kali}
              </motion.span>
            </AnimatePresence>
          </NavLink>
          <NavLink 
            to="/psychology" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-psychology`}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.4 }}
              >
                {t.nav.psychology}
              </motion.span>
            </AnimatePresence>
          </NavLink>
        </nav>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
