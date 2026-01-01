import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../translations';
import styles from './About.module.css';
import Particles from '../../components/Particles/Particles';
import MagicBento from '../../components/MagicBento/MagicBento';

const About = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const skillCategories = [
    { icon: '⚛️', title: t.about.skillCategories.frontend.title, description: t.about.skillCategories.frontend.description },
    { icon: '🔗', title: t.about.skillCategories.integrations.title, description: t.about.skillCategories.integrations.description },
    { icon: '🛡️', title: t.about.skillCategories.codeProtection.title, description: t.about.skillCategories.codeProtection.description },
    { icon: '🌐', title: t.about.skillCategories.network.title, description: t.about.skillCategories.network.description },
    { icon: '📡', title: t.about.skillCategories.networkTech.title, description: t.about.skillCategories.networkTech.description },
    { icon: '🛰️', title: t.about.skillCategories.starlink.title, description: t.about.skillCategories.starlink.description },
    { icon: '🔧', title: t.about.skillCategories.equipment.title, description: t.about.skillCategories.equipment.description },
    { icon: '🔐', title: t.about.skillCategories.security.title, description: t.about.skillCategories.security.description }
  ];

  const jobs = [
    {
      title: t.about.jobs.frontend.title,
      company: t.about.jobs.frontend.company,
      period: t.about.jobs.frontend.period,
      tasks: t.about.jobs.frontend.tasks
    },
    {
      title: t.about.jobs.military.title,
      company: t.about.jobs.military.company,
      period: t.about.jobs.military.period,
      tasks: t.about.jobs.military.tasks
    }
  ];

  return (
    <div className={styles.about}>
      {/* Particles Background */}
      <div className={styles.particlesBg}>
        <Particles
          particleColors={theme === 'light' ? ['#0d9488', '#14b8a6'] : ['#2dd4bf', '#14b8a6', '#0d9488', '#ffffff']}
          particleCount={theme === 'light' ? 30 : 200}
          particleSpread={theme === 'light' ? 8 : 10}
          speed={0.1}
          particleBaseSize={theme === 'light' ? 50 : 100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-label`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                {t.about.label}
              </motion.span>
            </AnimatePresence>
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-title`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.about.title}
              </motion.span>
            </AnimatePresence>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-subtitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.about.subtitle}
              </motion.span>
            </AnimatePresence>
          </motion.p>
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
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.about.skillsTitle}
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
              cards={skillCategories}
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
              language={language}
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
                key={`${language}-projectsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.about.otherProjectsTitle}
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
              href="https://alexmaxeven.github.io/kali/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <span className={styles.projectIcon}>🛡️</span>
              <span className={styles.projectText}>
                <span className={styles.projectTitle}>Kali Security Lab</span>
                <span className={styles.projectSubtitle}>Security Testing Environment</span>
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

      <section className={styles.experience}>
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
                key={`${language}-experienceTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.about.experienceTitle}
              </motion.span>
            </AnimatePresence>
          </motion.h2>

          <div className={styles.timeline}>
            {jobs.map((job, index) => (
              <motion.div 
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <div className={styles.timelineDot}></div>
                <motion.div 
                  className={styles.timelineContent}
                  whileHover={{ 
                    scale: 1.01,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className={styles.jobHeader}>
                    <div>
                      <h3 className={styles.jobTitle}>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${language}-job-${index}-title`}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.4 }}
                            style={{ display: 'inline-block' }}
                          >
                            {job.title}
                          </motion.span>
                        </AnimatePresence>
                      </h3>
                      <p className={styles.jobCompany}>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${language}-job-${index}-company`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {job.company}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                    <span className={styles.jobPeriod}>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`${language}-job-${index}-period`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {job.period}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </div>
                  <ul className={styles.jobList}>
                    {job.tasks.map((task, taskIndex) => (
                      <motion.li 
                        key={`${language}-job-${index}-task-${taskIndex}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + taskIndex * 0.05 }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`${language}-task-${taskIndex}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {task}
                          </motion.span>
                        </AnimatePresence>
                      </motion.li>
                    ))}
                  </ul>
                  <div className={styles.jobGlow}></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
