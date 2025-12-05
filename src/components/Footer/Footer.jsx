import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>Олександр Заверюха</span>
            <p className={styles.tagline}>IT & Network Specialist</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.column}>
              <h4 className={styles.title}>Контакти</h4>
              <ul className={styles.list}>
                <li>ax.zaver****@gmail.com</li>
                <li>063 034 ** **</li>
                <li>Київ, Україна</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Олександр Заверюха. Резюме.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
