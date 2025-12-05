import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import alexPhoto from '../../assets/alex.png';

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.photoWrapper}>
              <img 
                src={alexPhoto} 
                alt="Заверюха Олександр Вікторович" 
                className={styles.photo}
              />
            </div>
            
            <div className={styles.info}>
              <span className={styles.label}>Резюме</span>
              <h1 className={styles.name}>
                Заверюха Олександр Вікторович
              </h1>
              <p className={styles.position}>
                IT & Network Specialist
                <span className={styles.positionSub}>(Frontend / MikroTik / Security)</span>
              </p>
              
              <div className={styles.contacts}>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>Україна, Київ</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>ax.zaver****@gmail.com</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>063 034 ** **</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🎂</span>
                  <span>18 жовтня 1993</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Про мене</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Фронтенд-розробник із понад <strong>3,5 роками комерційного досвіду</strong>, включно з півроку в ролі тімліда команди з 10 осіб. Спеціалізуюся на створенні вебінтерфейсів на JavaScript, React.js, Vite, Tailwind, інтеграції з трекінговими платформами (Binom, Keitaro, StatCounter) та оптимізації продуктивності клієнтських застосунків.
            </p>
            <p className={styles.aboutText}>
              Маю практичний досвід роботи з мережевими рішеннями <strong>MikroTik</strong> — налаштування маршрутів, резервних каналів, VPN і базових схем захисту.
            </p>
            <p className={styles.aboutText}>
              Зараз активно розвиваюся у напрямку <strong>кібербезпеки</strong>: знайомлюсь із Kali Linux, принципами безпеки вебзастосунків і технологіями фронтенд-захисту (DOMPurify, XSS/CSRF).
            </p>
            <p className={styles.aboutText}>
              До повномасштабної війни також три роки навчався психотерапії в академії (гештальт-напрям), що допомогло сформувати навички комунікації, лідерства та роботи з командами.
            </p>
            <p className={styles.aboutHighlight}>
              <span className={styles.highlightIcon}>🇺🇦</span>
              Літо 2025 року — військовослужбовець.
            </p>

            <Link to="/about" className={styles.moreBtn}>
              Детальніше про досвід →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ключові навички</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚛️</div>
              <h3 className={styles.skillTitle}>Frontend</h3>
              <p className={styles.skillText}>JavaScript, React.js, Vite, Tailwind CSS, HTML/CSS</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🌐</div>
              <h3 className={styles.skillTitle}>MikroTik</h3>
              <p className={styles.skillText}>Маршрутизація, VPN, резервні канали, базовий захист</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔐</div>
              <h3 className={styles.skillTitle}>Security</h3>
              <p className={styles.skillText}>Kali Linux, XSS/CSRF захист, DOMPurify</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>📊</div>
              <h3 className={styles.skillTitle}>Tracking</h3>
              <p className={styles.skillText}>Binom, Keitaro, StatCounter, аналітика</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
