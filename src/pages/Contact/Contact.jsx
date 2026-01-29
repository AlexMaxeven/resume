import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../translations';
import styles from './Contact.module.css';
import LiquidEther from '../../components/LiquidEther/LiquidEther';
import MagicBento from '../../components/MagicBento/MagicBento';

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  const education = [
    { icon: '🎓', title: t.contact.education.bachelor.title, description: t.contact.education.bachelor.description },
    { icon: '🎓', title: t.contact.education.master.title, description: t.contact.education.master.description },
    { icon: '🧠', title: t.contact.education.therapy.title, description: t.contact.education.therapy.description }
  ];

  const development = [
    { icon: '🔐', title: t.contact.development.cybersecurity.title, description: t.contact.development.cybersecurity.description },
    { icon: '🛡️', title: t.contact.development.webSecurity.title, description: t.contact.development.webSecurity.description }
  ];

  const languages = [
    { icon: '🇺🇦', title: t.contact.languages.ukrainian.title, description: t.contact.languages.ukrainian.description },
    { icon: '🇬🇧', title: t.contact.languages.english.title, description: t.contact.languages.english.description }
  ];

  const contacts = [
    { icon: '📧', title: t.contact.contacts.email.title, description: t.contact.contacts.email.description },
    { icon: '📞', title: t.contact.contacts.phone.title, description: t.contact.contacts.phone.description },
    { icon: '📍', title: t.contact.contacts.location.title, description: t.contact.contacts.location.description }
  ];

  const qualities = t.contact.qualities;

  return (
    <div className={styles.contact}>
      {/* Liquid Ether Background - only on dark theme */}
      {theme === 'dark' && (
        <div className={styles.liquidBg}>
          <LiquidEther
            colors={['#2dd4bf', '#14b8a6', '#0d9488']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
      )}

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
                {t.contact.label}
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
                {t.contact.title}
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
                {t.contact.subtitle}
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>
      </section>

      <section className={styles.education}>
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
                key={`${language}-educationTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.contact.educationTitle}
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
              cards={education}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={8}
              glowColor="45, 212, 191"
              language={language}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.development}>
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
                key={`${language}-developmentTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.contact.developmentTitle}
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
              cards={development}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={8}
              glowColor="45, 212, 191"
              language={language}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.languages}>
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
                key={`${language}-languagesTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.contact.languagesTitle}
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
              cards={languages}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={6}
              glowColor="45, 212, 191"
              language={language}
            />
          </motion.div>
        </div>
      </section>

      <section className={styles.qualities}>
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
                key={`${language}-qualitiesTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.contact.qualitiesTitle}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          
          <motion.div 
            className={styles.qualContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className={styles.qualText}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-qualitiesText1`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                >
                  {t.contact.qualitiesText1}
                </motion.span>
              </AnimatePresence>
            </p>
            <p className={styles.qualText}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${language}-qualitiesText2`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.4 }}
                  dangerouslySetInnerHTML={{ __html: t.contact.qualitiesText2 }}
                />
              </AnimatePresence>
            </p>
          </motion.div>

          <div className={styles.qualTags}>
            {qualities.map((quality, index) => (
              <motion.span 
                key={`${language}-quality-${index}`}
                className={styles.qualTag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.2 + index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-quality-text-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {quality}
                  </motion.span>
                </AnimatePresence>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
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
                key={`${language}-contactsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.contact.contactsTitle}
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
              cards={contacts}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={8}
              glowColor="45, 212, 191"
              language={language}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
