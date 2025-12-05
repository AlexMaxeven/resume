import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import SplitText from '../SplitText/SplitText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        </NavLink>

        <button 
          className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            Резюме
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            Досвід
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? `${styles.link} ${styles.linkActive}` : styles.link
            }
            onClick={closeMenu}
          >
            Освіта
          </NavLink>
        </nav>
      </div>

      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
