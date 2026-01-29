import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import styles from './Footer.module.css';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-name`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {t.footer.name}
                </motion.span>
              </AnimatePresence>
            </span>
            <p className={styles.tagline}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-tagline`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {t.footer.tagline}
                </motion.span>
              </AnimatePresence>
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.title}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-contactsTitle`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                  >
                    {t.footer.contactsTitle}
                  </motion.span>
                </AnimatePresence>
              </h4>
              <ul className={styles.list}>
                <li>a*.z*****@g***.com</li>
                <li>*** *** ** **</li>
                <li>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-location`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      {language === 'uk' ? 'Київ, Україна' : 'Kyiv, Ukraine'}
                    </motion.span>
                  </AnimatePresence>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-copyright`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {t.footer.copyright.replace('{year}', currentYear)}
              </motion.span>
            </AnimatePresence>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
