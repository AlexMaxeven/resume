import { motion } from 'framer-motion';
import styles from './About.module.css';
import Particles from '../../components/Particles/Particles';

const About = () => {
  const skillCategories = [
    { icon: '⚛️', title: 'Frontend', list: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind, Vite, Redux, jQuery, PHP' },
    { icon: '🔗', title: 'Інтеграції', list: 'Binom, Keitaro, Ecco, StatCounter, Google Analytics' },
    { icon: '🛡️', title: 'Захист коду', list: 'Мініфікація, обфускація, контроль середовищ збірки' },
    { icon: '🌐', title: 'Network / DevOps', list: 'MikroTik RouterOS, WireGuard, L2TP/IPsec, DHCP, Failover, Firewall, маршрутизація, Netwatch, VPS-сервера, Mangle-правила, EIOP' },
    { icon: '📡', title: 'Мережеві технології', list: 'Налаштування оптичних каналів, статичних провайдерів, резервування з\'єднань, балансування трафіку' },
    { icon: '🛰️', title: 'Starlink', list: 'Первинна активація, налаштування додатку та інтеграція зі шлюзами' },
    { icon: '🔧', title: 'Обладнання', list: 'MikroTik, TP-Link, Netis, Huawei, Starlink, Motorola, Garmin GPSMAP / Montana' },
    { icon: '🔐', title: 'Безпека', list: 'Kali Linux, DOMPurify, базова веб-захист (XSS, CSRF)' }
  ];

  const jobs = [
    {
      title: 'Frontend Developer / Team Lead',
      company: 'IT Studio / Freelance Projects',
      period: '2021 — Літо 2025',
      tasks: [
        'Розробка, оптимізація та підтримка веб-інтерфейсів (React.js, Vite, Tailwind)',
        'Створення власних збірок для різних проєктів, інтеграція з Binom, Keitaro, Ecco',
        'Впровадження захисту: обфускація, мініфікація, контроль оточення продакшн-білдів',
        'Керування командою до 10 розробників, розподіл завдань, рев\'ю коду',
        'Оптимізація UI/UX та впровадження базових заходів фронтенд-безпеки'
      ]
    },
    {
      title: 'Військовий зв\'язківець / Network Specialist',
      company: 'Відділ зв\'язку (ЗСУ) 🇺🇦',
      period: 'серпень 2025 — дотепер',
      tasks: [
        'Налаштування, прошивка та адміністрування маршрутизаторів MikroTik, Netis, TP-Link',
        'Робота з оптичними лініями, статичними провайдерами та динамічними DHCP-з\'єднаннями',
        'Організація резервних каналів зв\'язку, балансування провайдерів, Failover',
        'Налаштування Mangle-правил для базового розподілення трафіку та ресурсів',
        'Створення та обслуговування VPS MikroTik-сервера',
        'Моніторинг мережі через Netwatch, автоматичне перемикання маршрутів',
        'Налаштування firewall-правил, VPN-каналів (WireGuard, L2TP), DHCP',
        'Робота з Starlink: активація через додаток, налаштування шлюзу, тестування з\'єднання',
        'Робота з Garmin навігаторами (прошивка, мапи, налаштування)',
        'Налаштування та підтримка акаунтів Кропива'
      ]
    }
  ];

  return (
    <div className={styles.about}>
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
        <div className={styles.container}>
          <motion.span 
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Кар'єра
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Досвід та навички
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Технічний стек та професійний шлях
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
            Технічні навички
          </motion.h2>
          
          <div className={styles.skillsGrid}>
            {skillCategories.map((skill, index) => (
              <motion.div 
                key={index}
                className={styles.skillCategory}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <h3 className={styles.skillCategoryTitle}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  {skill.title}
                </h3>
                <p className={styles.skillList}>{skill.list}</p>
                <div className={styles.skillGlow}></div>
              </motion.div>
            ))}
          </div>
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
            Досвід роботи
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
                      <h3 className={styles.jobTitle}>{job.title}</h3>
                      <p className={styles.jobCompany}>{job.company}</p>
                    </div>
                    <span className={styles.jobPeriod}>{job.period}</span>
                  </div>
                  <ul className={styles.jobList}>
                    {job.tasks.map((task, taskIndex) => (
                      <motion.li 
                        key={taskIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + taskIndex * 0.05 }}
                      >
                        {task}
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
