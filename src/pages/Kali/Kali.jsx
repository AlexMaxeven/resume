import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import { translations } from '../../translations';
import styles from './Kali.module.css';
import LiquidEther from '../../components/LiquidEther/LiquidEther';
import MagicBento from '../../components/MagicBento/MagicBento';
import ContactForm from '../../components/ContactForm/ContactForm';

const Kali = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];

  // Компетенції
  const competencies = t.kali.competencies;

  // Інструменти
  const tools = t.kali.tools;

  // Мета
  const goals = t.kali.goals;

  // Інструменти детально
  const toolsDetailed = t.kali.toolsDetailed;

  // Практичні навички
  const practicalSkills = t.kali.practicalSkills;

  // Що вивчаю
  const learning = t.kali.learning;

  return (
    <div className={styles.kali}>
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
                {t.kali.label}
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
                {t.kali.title}
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
                {t.kali.subtitle}
              </motion.span>
            </AnimatePresence>
          </motion.p>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-description`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.description}
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>
      </section>

      {/* Компетенції */}
      <section className={styles.competencies}>
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
                key={`${language}-competenciesTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.competenciesTitle}
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
              cards={competencies}
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

      {/* Інструменти */}
      <section className={styles.tools}>
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
                key={`${language}-toolsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.toolsTitle}
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
              cards={tools}
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

          {/* Детальний список інструментів */}
          <motion.div
            className={styles.toolsDetailed}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-scanning-title`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {toolsDetailed.scanning.title}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className={styles.toolList}>
                {toolsDetailed.scanning.tools.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-scanning-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <strong>{tool.name}</strong> — {tool.desc}
                      </motion.span>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-vulnerabilities-title`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {toolsDetailed.vulnerabilities.title}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className={styles.toolList}>
                {toolsDetailed.vulnerabilities.tools.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-vulnerabilities-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <strong>{tool.name}</strong> — {tool.desc}
                      </motion.span>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-pentesting-title`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {toolsDetailed.pentesting.title}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className={styles.toolList}>
                {toolsDetailed.pentesting.tools.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-pentesting-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <strong>{tool.name}</strong> — {tool.desc}
                      </motion.span>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-traffic-title`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {toolsDetailed.traffic.title}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className={styles.toolList}>
                {toolsDetailed.traffic.tools.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-traffic-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <strong>{tool.name}</strong> — {tool.desc}
                      </motion.span>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-osint-title`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4 }}
                    style={{ display: 'inline-block' }}
                  >
                    {toolsDetailed.osint.title}
                  </motion.span>
                </AnimatePresence>
              </h3>
              <ul className={styles.toolList}>
                {toolsDetailed.osint.tools.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${language}-osint-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <strong>{tool.name}</strong> — {tool.desc}
                      </motion.span>
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Практичні навички */}
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
                {t.kali.skillsTitle}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          
          <motion.ul
            className={styles.skillsList}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {practicalSkills.map((skill, index) => (
              <motion.li
                key={`${language}-skill-${index}`}
                className={styles.skillItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-skill-text-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Що вивчаю */}
      <section className={styles.learning}>
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
                key={`${language}-learningTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.learningTitle}
              </motion.span>
            </AnimatePresence>
          </motion.h2>
          
          <motion.ul
            className={styles.learningList}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {learning.map((item, index) => (
              <motion.li
                key={`${language}-learning-${index}`}
                className={styles.learningItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${language}-learning-text-${index}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.span>
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Мета */}
      <section className={styles.goals}>
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
                key={`${language}-goalsTitle`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.goalsTitle}
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
              cards={goals}
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

          <motion.p
            className={styles.goalText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`${language}-goalText`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                style={{ display: 'inline-block' }}
              >
                {t.kali.goalText}
              </motion.span>
            </AnimatePresence>
          </motion.p>
        </div>
      </section>

      {/* Демонстрація захисту */}
      <section className={styles.contactFormSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kali;
