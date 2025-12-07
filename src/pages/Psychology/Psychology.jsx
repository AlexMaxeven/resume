import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import styles from './Psychology.module.css';
import LiquidEther from '../../components/LiquidEther/LiquidEther';
import MagicBento from '../../components/MagicBento/MagicBento';

const Psychology = () => {
  const { language } = useLanguage();
  const t = translations[language];

  // Напрямки та навички
  const directions = t.psychology.directionsCards;

  // Детальна інформація про напрямки
  const directionsDetailed = {
    personal: t.psychology.directions.personal,
    triads: t.psychology.directions.triads,
    group: t.psychology.directions.group,
    education: t.psychology.directions.education
  };

  // Книги
  const books = t.psychology.books;

  return (
    <div className={styles.psychology}>
      {/* Liquid Ether Background */}
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

      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t.psychology.label}
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t.psychology.title}
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.psychology.subtitle}
          </motion.p>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t.psychology.description}
          </motion.p>
        </div>
      </section>

      {/* Напрямки та навички */}
      <section className={styles.directions}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.psychology.directionsTitle}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagicBento
              cards={directions}
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
            />
          </motion.div>
        </div>
      </section>

      {/* Детальна інформація */}
      <section className={styles.detailed}>
        <div className={styles.container}>
          {/* Особиста терапія */}
          <motion.div
            className={styles.directionCategory}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.categoryTitle}>{directionsDetailed.personal.title}</h3>
            <ul className={styles.categoryList}>
              {directionsDetailed.personal.items.map((item, idx) => (
                <li key={idx} className={styles.categoryItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Робота в трійках */}
          <motion.div
            className={styles.directionCategory}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={styles.categoryTitle}>{directionsDetailed.triads.title}</h3>
            <ul className={styles.categoryList}>
              {directionsDetailed.triads.items.map((item, idx) => (
                <li key={idx} className={styles.categoryItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Групова робота */}
          <motion.div
            className={styles.directionCategory}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className={styles.categoryTitle}>{directionsDetailed.group.title}</h3>
            <ul className={styles.categoryList}>
              {directionsDetailed.group.items.map((item, idx) => (
                <li key={idx} className={styles.categoryItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Навчання */}
          <motion.div
            className={styles.directionCategory}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className={styles.categoryTitle}>{directionsDetailed.education.title}</h3>
            <ul className={styles.categoryList}>
              {directionsDetailed.education.items.map((item, idx) => (
                <li key={idx} className={styles.categoryItem}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Книги */}
      <section className={styles.books}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.psychology.booksTitle}
          </motion.h2>
          
          <motion.ul
            className={styles.booksList}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {books.map((book, index) => (
              <motion.li
                key={index}
                className={styles.bookItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {book}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
};

export default Psychology;
