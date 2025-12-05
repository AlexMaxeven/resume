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
                <li><a href="mailto:ax.zaverukha@gmail.com">ax.zaverukha@gmail.com</a></li>
                <li><a href="tel:+380630342168">063 034 21 68</a></li>
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
