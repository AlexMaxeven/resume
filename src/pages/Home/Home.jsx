import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import styles from './Home.module.css';
import alexPhoto from '../../assets/alex.png';
import alexPhoto2 from '../../assets/alex2.png';
import MagicBento from '../../components/MagicBento/MagicBento';
import Particles from '../../components/Particles/Particles';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [isFlipped, setIsFlipped] = useState(false);

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
              <div 
                className={`${styles.photoFlip} ${isFlipped ? styles.photoFlipped : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className={styles.photoFront}>
                  <img 
                    key="alex-front"
                    src={alexPhoto} 
                    alt="Заверюха Олександр Вікторович" 
                    className={styles.photo}
                  />
                </div>
                <div className={styles.photoBack}>
                  <img 
                    key="alex-back"
                    src={alexPhoto2} 
                    alt="Заверюха Олександр Вікторович" 
                    className={styles.photo}
                  />
                </div>
              </div>
            </motion.div>
            
            <div className={styles.info}>
              <motion.span 
                className={styles.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-label`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                  >
                    {t.home.label}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
              <motion.h1 
                className={styles.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-name`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'inline-block' }}
                  >
                    {t.home.name}
                  </motion.span>
                </AnimatePresence>
              </motion.h1>
              <motion.p 
                className={styles.position}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-position`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    style={{ display: 'inline-block' }}
                  >
                    {t.home.position}
                    <span className={styles.positionSub}>{t.home.positionSub}</span>
                  </motion.span>
                </AnimatePresence>
              </motion.p>
              
              <motion.div 
                className={styles.contacts}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📍</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-location`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.home.location}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📧</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-email`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.home.email}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>📞</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-phone`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.home.phone}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}>🎂</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${language}-birthday`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {t.home.birthday}
                    </motion.span>
                  </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-aboutMe`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                {t.home.aboutMe}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          <div className={styles.aboutContent}>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-aboutText1`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  dangerouslySetInnerHTML={{ __html: t.home.aboutText1 }}
                />
              </AnimatePresence>
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-aboutText2`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  dangerouslySetInnerHTML={{ __html: t.home.aboutText2 }}
                />
              </AnimatePresence>
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-aboutText3`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  dangerouslySetInnerHTML={{ __html: t.home.aboutText3 }}
                />
              </AnimatePresence>
            </motion.p>
            <motion.p 
              className={styles.aboutText}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-aboutText4`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  {t.home.aboutText4}
                </motion.span>
              </AnimatePresence>
            </motion.p>
            <motion.p 
              className={styles.aboutHighlight}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className={styles.highlightIcon}>🇺🇦</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-aboutHighlight`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                >
                  {t.home.aboutHighlight}
                </motion.span>
              </AnimatePresence>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/about" className={styles.moreBtn}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-moreBtn`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.home.moreBtn}
                  </motion.span>
                </AnimatePresence>
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
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-skillsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                {t.home.skillsTitle}
              </motion.span>
            </AnimatePresence>
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

      <section className={styles.projects}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-otherProjectsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                style={{ display: 'inline-block' }}
              >
                {t.home.otherProjectsTitle}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          
          <motion.div
            className={styles.projectsLinks}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="https://alexmaxeven.github.io/psyhologist/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <span className={styles.projectIcon}>🧠</span>
              <span className={styles.projectText}>
                <span className={styles.projectTitle}>Psychologist</span>
                <span className={styles.projectSubtitle}>Gestalt Therapy Project</span>
              </span>
              <span className={styles.projectArrow}>→</span>
            </a>

            <a
              href="https://alexmaxeven.github.io/mikrotik/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <span className={styles.projectIcon}>🌐</span>
              <span className={styles.projectText}>
                <span className={styles.projectTitle}>MikroTik</span>
                <span className={styles.projectSubtitle}>Network Configuration Tool</span>
              </span>
              <span className={styles.projectArrow}>→</span>
            </a>

            <a
              href="https://github.com/AlexMaxeven"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <span className={styles.projectIcon}>💻</span>
              <span className={styles.projectText}>
                <span className={styles.projectTitle}>GitHub</span>
                <span className={styles.projectSubtitle}>View my repositories</span>
              </span>
              <span className={styles.projectArrow}>→</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
