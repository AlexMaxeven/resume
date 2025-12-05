import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import Galaxy from '../../components/Galaxy/Galaxy';
import MagicBento from '../../components/MagicBento/MagicBento';

const Contact = () => {
  const education = [
    { icon: '🎓', title: 'Бакалавр, Логістика', description: 'Національний університет біоресурсів і природокористування України (НУБіП)' },
    { icon: '🎓', title: 'Магістр, Адміністративний менеджмент', description: 'Київський політехнічний інститут (КПІ)' },
    { icon: '🧠', title: 'Гештальт-терапія', description: 'Академія психотерапії — 3 роки навчання' }
  ];

  const development = [
    { icon: '🔐', title: 'Кібербезпека', description: 'Kali Linux, принципи web-захисту, XSS/CSRF, DOMPurify. Навчання через документацію та AI.' },
    { icon: '🛡️', title: 'Веб-захист', description: 'Розширюю знання у захисті веб-додатків, мережевій та прикладній безпеці.' }
  ];

  const languages = [
    { icon: '🇺🇦', title: 'Українська', description: 'Рідна' },
    { icon: '🇬🇧', title: 'Англійська', description: 'B2' }
  ];

  const contacts = [
    { icon: '📧', title: 'Email', description: 'ax.zaver****@gmail.com' },
    { icon: '📞', title: 'Телефон', description: '063 034 ** **' },
    { icon: '📍', title: 'Локація', description: 'Київ, Україна' }
  ];

  const qualities = [
    'Відповідальність',
    'Уважність до деталей',
    'Системне мислення',
    'Лідерство',
    'Комунікація',
    'Координація команди'
  ];

  return (
    <div className={styles.contact}>
      {/* Galaxy Background */}
      <div className={styles.galaxyBg}>
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={180}
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
            Профіль
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Освіта та контакти
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Освітній шлях, розвиток та способи зв'язку
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
            Освіта
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <MagicBento
              cards={education}
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

      <section className={styles.development}>
        <div className={styles.container}>
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Поточний розвиток
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
            Мови
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
            Додаткові якості
          </motion.h2>
          
          <motion.div 
            className={styles.qualContent}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className={styles.qualText}>
              Відповідальність, уважність до деталей, системне мислення, вміння координувати команду та знаходити ефективні рішення.
            </p>
            <p className={styles.qualText}>
              Поєдную практичний досвід <strong>frontend-розробки</strong>, <strong>мережевих технологій</strong> і розуміння людської поведінки, що дозволяє ефективно будувати комунікацію та керувати процесами.
            </p>
          </motion.div>

          <div className={styles.qualTags}>
            {qualities.map((quality, index) => (
              <motion.span 
                key={index}
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
                {quality}
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
            Контакти
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
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
