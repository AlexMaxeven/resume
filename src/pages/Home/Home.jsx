import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import styles from './Home.module.css';
import alexPhoto from '../../assets/alex.png';
import MagicBento from '../../components/MagicBento/MagicBento';
import Particles from '../../components/Particles/Particles';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const skills = [
    {
      icon: '⚛️',
      title: t.home.skills.frontend.title,
      description: t.home.skills.frontend.description,
      label: 'Dev'
    },
    {
      icon: '🌐',
      title: t.home.skills.mikrotik.title,
      description: t.home.skills.mikrotik.description,
      label: 'Network'
    },
    {
      icon: '🔐',
      title: t.home.skills.security.title,
      description: t.home.skills.security.description,
      label: 'Cyber'
    },
    {
      icon: '📊',
      title: t.home.skills.tracking.title,
      description: t.home.skills.tracking.description,
      label: 'Analytics'
    },
    {
      icon: '🛰️',
      title: t.home.skills.starlink.title,
      description: t.home.skills.starlink.description,
      label: 'Satellite'
    },
    {
      icon: '👥',
      title: t.home.skills.teamlead.title,
      description: t.home.skills.teamlead.description,
      label: 'Management'
    }
  ];

  return (
    <div className={styles.home}>
      {/* Particles Background */}
      <div className={styles.particlesBg}>
        <Particles
          particleColors={['#2dd4bf', '#14b8a6', '#0d9488', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

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
                {t.home.label}
              </motion.span>
              <motion.h1 
                className={styles.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {t.home.name}
              </motion.h1>
              <motion.p 
                className={styles.position}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                {t.home.position}
                <span className={styles.positionSub}>{t.home.positionSub}</span>
              </motion.p>
              
              <motion.div 
                className={styles.contacts}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <span>{t.home.location}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <span>{t.home.email}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <span>{t.home.phone}</span>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🎂</span>
                  <span>{t.home.birthday}</span>
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
            {t.home.aboutMe}
          </motion.h2>
          <div className={styles.aboutContent}>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              dangerouslySetInnerHTML={{ __html: t.home.aboutText1 }}
            />
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: t.home.aboutText2 }}
            />
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: t.home.aboutText3 }}
            />
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t.home.aboutText4}
            </motion.p>
            <motion.p 
              className={styles.aboutHighlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className={styles.highlightIcon}>🇺🇦</span>
              {t.home.aboutHighlight}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/about" className={styles.moreBtn}>
                {t.home.moreBtn}
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
            {t.home.skillsTitle}
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
