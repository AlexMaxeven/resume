import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
  const education = [
    { icon: '🎓', title: 'Бакалавр, Логістика', place: 'Національний університет біоресурсів і природокористування України (НУБіП)' },
    { icon: '🎓', title: 'Магістр, Адміністративний менеджмент', place: 'Київський політехнічний інститут (КПІ)' },
    { icon: '🧠', title: 'Гештальт-терапія', place: 'Академія психотерапії — 3 роки навчання' }
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
          
          <div className={styles.eduGrid}>
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                className={styles.eduCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.eduIcon}>{edu.icon}</div>
                <div className={styles.eduContent}>
                  <h3 className={styles.eduTitle}>{edu.title}</h3>
                  <p className={styles.eduPlace}>{edu.place}</p>
                </div>
                <div className={styles.eduGlow}></div>
              </motion.div>
            ))}
          </div>
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
          
          <div className={styles.devContent}>
            <motion.div 
              className={styles.devCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles.devIcon}>🔐</div>
              <p className={styles.devText}>
                Вивчаю <strong>кібербезпеку</strong>: Kali Linux, принципи web-захисту, XSS/CSRF, DOMPurify. Здебільшого розвиток та навчання через документацію та штучний інтелект — який мені і формує навчання. В перспективі проходження платних курсів та поглиблення базових знань в цьому напрямку.
              </p>
              <div className={styles.devGlow}></div>
            </motion.div>
            <motion.div 
              className={styles.devCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className={styles.devIcon}>🛡️</div>
              <p className={styles.devText}>
                Розширюю знання у <strong>захисті веб-додатків</strong>, мережевій та прикладній безпеці.
              </p>
              <div className={styles.devGlow}></div>
            </motion.div>
          </div>
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
          
          <div className={styles.langGrid}>
            <motion.div 
              className={styles.langCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.langFlag}>🇺🇦</span>
              <div className={styles.langInfo}>
                <h3 className={styles.langName}>Українська</h3>
                <span className={styles.langLevel}>Рідна</span>
              </div>
            </motion.div>
            <motion.div 
              className={styles.langCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.langFlag}>🇬🇧</span>
              <div className={styles.langInfo}>
                <h3 className={styles.langName}>Англійська</h3>
                <span className={styles.langLevel}>B2</span>
              </div>
            </motion.div>
          </div>
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
          
          <div className={styles.contactGrid}>
            <motion.div 
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.contactIcon}>📧</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>ax.zaver****@gmail.com</span>
              </div>
              <div className={styles.contactGlow}></div>
            </motion.div>

            <motion.div 
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Телефон</span>
                <span className={styles.contactValue}>063 034 ** **</span>
              </div>
              <div className={styles.contactGlow}></div>
            </motion.div>

            <motion.div 
              className={styles.contactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Локація</span>
                <span className={styles.contactValue}>Київ, Україна</span>
              </div>
              <div className={styles.contactGlow}></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
