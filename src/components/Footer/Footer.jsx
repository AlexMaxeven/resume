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
            <span className={styles.logo}>{t.footer.name}</span>
            <p className={styles.tagline}>{t.footer.tagline}</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.title}>{t.footer.contactsTitle}</h4>
              <ul className={styles.list}>
                <li>ax.zaver****@gmail.com</li>
                <li>063 034 ** **</li>
                <li>{language === 'uk' ? 'Київ, Україна' : 'Kyiv, Ukraine'}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {t.footer.copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
