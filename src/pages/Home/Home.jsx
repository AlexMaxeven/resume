import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import alexPhoto from '../../assets/alex.png';
import MagicBento from '../../components/MagicBento/MagicBento';

const Home = () => {
  const skills = [
    {
      icon: '⚛️',
      title: 'Frontend',
      description: 'JavaScript, React.js, Vite, Tailwind CSS, Redux, HTML/CSS',
      label: 'Dev'
    },
    {
      icon: '🌐',
      title: 'MikroTik',
      description: 'Маршрутизація, VPN, резервні канали, Firewall, Netwatch',
      label: 'Network'
    },
    {
      icon: '🔐',
      title: 'Security',
      description: 'Kali Linux, XSS/CSRF захист, DOMPurify, веб-безпека, мережевий захист',
      label: 'Cyber'
    },
    {
      icon: '📊',
      title: 'Tracking',
      description: 'Binom, Keitaro, StatCounter, Google Analytics',
      label: 'Analytics'
    },
    {
      icon: '🛰️',
      title: 'Starlink',
      description: 'Активація, налаштування, інтеграція зі шлюзами',
      label: 'Satellite'
    },
    {
      icon: '👥',
      title: 'Team Lead',
      description: 'Керування командою до 10 осіб, рев\'ю коду, розподіл завдань',
      label: 'Management'
    }
  ];

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className={styles.photoWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={alexPhoto} 
                alt="Заверюха Олександр Вікторович" 
                className={styles.photo}
              />
            </motion.div>
            
            <div className={styles.info}>
              <motion.span 
                className={styles.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Резюме
              </motion.span>
              <motion.h1 
                className={styles.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Заверюха Олександр Вікторович
              </motion.h1>
              <motion.p 
                className={styles.position}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                IT & Network Specialist
                <span className={styles.positionSub}>(Frontend / MikroTik / Security)</span>
              </motion.p>
              
              <motion.div 
                className={styles.contacts}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
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
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Про мене
          </motion.h2>
          <div className={styles.aboutContent}>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Фронтенд-розробник із понад <strong>3,5 роками комерційного досвіду</strong>, включно з півроку в ролі тімліда команди з 10 осіб. Спеціалізуюся на створенні вебінтерфейсів на JavaScript, React.js, Vite, Tailwind, інтеграції з трекінговими платформами (Binom, Keitaro, StatCounter) та оптимізації продуктивності клієнтських застосунків.
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Маю практичний досвід роботи з мережевими рішеннями <strong>MikroTik</strong> — налаштування маршрутів, резервних каналів, VPN і базових схем захисту.
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Зараз активно розвиваюся у напрямку <strong>кібербезпеки</strong>: знайомлюсь із Kali Linux, принципами безпеки вебзастосунків і технологіями фронтенд-захисту (DOMPurify, XSS/CSRF).
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              До повномасштабної війни також три роки навчався психотерапії в академії (гештальт-напрям), що допомогло сформувати навички комунікації, лідерства та роботи з командами.
            </motion.p>
            <motion.p 
              className={styles.aboutHighlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className={styles.highlightIcon}>🇺🇦</span>
              Літо 2025 року — військовослужбовець.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/about" className={styles.moreBtn}>
                Детальніше про досвід →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ключові навички
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagicBento 
              cards={skills}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={10}
              glowColor="45, 212, 191"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
