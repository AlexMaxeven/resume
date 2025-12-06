import { motion } from 'framer-motion';
import styles from './Kali.module.css';
import LiquidEther from '../../components/LiquidEther/LiquidEther';
import MagicBento from '../../components/MagicBento/MagicBento';

const Kali = () => {
  // Компетенції
  const competencies = [
    { icon: '🔍', title: 'Сканування мереж', description: 'Визначення відкритих портів, сервісів, ОС' },
    { icon: '📡', title: 'Аналіз трафіку', description: 'Пошук аномалій, діагностика підключень' },
    { icon: '🌐', title: 'Тестування вебдодатків', description: 'XSS, CSRF, помилки конфігурації' },
    { icon: '🛡️', title: 'Пошук вразливостей', description: 'Аудит безпеки вебсерверів та мереж' }
  ];

  // Інструменти
  const tools = [
    { icon: '🔍', title: 'Nmap', description: 'Сканування портів, fingerprinting, аудит мережевих сервісів' },
    { icon: '🛡️', title: 'Burp Suite', description: 'Перехоплення, модифікація та аналіз HTTP-трафіку' },
    { icon: '📡', title: 'Wireshark', description: 'Аналіз пакетів, діагностика мережі' },
    { icon: '🔐', title: 'Hydra', description: 'Тестування на міцність паролів' },
    { icon: '⚔️', title: 'Metasploit', description: 'Тестові експлойти, робота з модулями (базовий рівень)' },
    { icon: '🔎', title: 'Nikto', description: 'Пошук вразливостей вебсерверів' }
  ];

  // Мета
  const goals = [
    { icon: '🎯', title: 'Поглиблення в cybersecurity', description: 'Практичні методи тестування та захисту' },
    { icon: '🧪', title: 'Penetration Testing', description: 'Практика на тестових цілях та лабораторіях' },
    { icon: '💻', title: 'Застосування у розробці', description: 'Використання знань у фронтенді та мережах' }
  ];

  // Інструменти детально
  const toolsDetailed = {
    scanning: [
      { name: 'Nmap', desc: 'Сканування портів, fingerprinting, аудит мережевих сервісів' },
      { name: 'Zenmap', desc: 'Візуалізація результатів сканування' },
      { name: 'WhatWeb / Wappalyzer', desc: 'Технологічний стек вебсайтів' }
    ],
    vulnerabilities: [
      { name: 'Nikto', desc: 'Пошук вразливостей вебсерверів' },
      { name: 'OpenVAS', desc: 'Сканування мережевих вразливостей (базовий рівень)' }
    ],
    pentesting: [
      { name: 'Burp Suite (Community)', desc: 'Перехоплення, модифікація та аналіз HTTP-трафіку, базове тестування XSS/CSRF' },
      { name: 'Metasploit Framework', desc: 'Тестові експлойти, робота з модулями auxiliary (базовий рівень)' },
      { name: 'Hydra', desc: 'Тестування на міцність паролів для SSH/FTP/HTTP auth' }
    ],
    traffic: [
      { name: 'Wireshark', desc: 'Аналіз пакетів, діагностика мережі' },
      { name: 'tcpdump', desc: 'Перехоплення трафіку з CLI' }
    ],
    osint: [
      { name: 'theHarvester', desc: 'Збір email/доменів/субдоменів' },
      { name: 'dnsenum / dig', desc: 'DNS-розвідка' },
      { name: 'Recon-ng', desc: 'Модульна платформа OSINT (початковий рівень)' }
    ]
  };

  // Практичні навички
  const practicalSkills = [
    'Виконання базового аудиту мережі: визначення відкритих портів, сервісів, ОС',
    'Проведення початкового тестування вебдодатків (XSS, CSRF, базові помилки конфігурації)',
    'Аналіз мережевого трафіку, пошук аномалій, діагностика нестабільності підключень',
    'Перехоплення та модифікація HTTP-запитів через Burp Suite',
    'Створення звітів про знайдені потенційні вразливості',
    'Проведення OSINT-досліджень доменів, компаній, субдоменів',
    'Тестування на слабкі паролі через Hydra та інші інструменти'
  ];

  // Що вивчаю
  const learning = [
    'OWASP Top-10 та моделі типових атак',
    'Створення безпечних фронтенд-застосунків (DOMPurify, захист від XSS, CSRF)',
    'Робота з Metasploit Framework на практичних тестових цілях',
    'Безпечні конфігурації мережевих пристроїв (MikroTik)',
    'Побудова VPN, тунелів та аудит мережевих сервісів'
  ];

  return (
    <div className={styles.kali}>
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
            Кібербезпека
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kali Linux
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Практичний досвід роботи з інструментами кібербезпеки, аудитом безпеки та базовим penetration testing
          </motion.p>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Використовую Kali Linux для освоєння ключових технік тестування безпеки вебзастосунків, мереж та інфраструктури. Працюю з інструментами OSINT, сканування вразливостей, перехоплення трафіку, аналізу мереж та експлуатації типових атак OWASP.
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
            Компетенції
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
            Інструменти, з якими працюю
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
              <h3 className={styles.categoryTitle}>🔍 Сканування та аналіз</h3>
              <ul className={styles.toolList}>
                {toolsDetailed.scanning.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <strong>{tool.name}</strong> — {tool.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>🛡 Виявлення вразливостей</h3>
              <ul className={styles.toolList}>
                {toolsDetailed.vulnerabilities.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <strong>{tool.name}</strong> — {tool.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>🧪 Penetration Testing інструменти</h3>
              <ul className={styles.toolList}>
                {toolsDetailed.pentesting.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <strong>{tool.name}</strong> — {tool.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>📡 Аналіз трафіку та мереж</h3>
              <ul className={styles.toolList}>
                {toolsDetailed.traffic.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <strong>{tool.name}</strong> — {tool.desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.toolCategory}>
              <h3 className={styles.categoryTitle}>📂 OSINT та інформаційна розвідка</h3>
              <ul className={styles.toolList}>
                {toolsDetailed.osint.map((tool, idx) => (
                  <li key={idx} className={styles.toolItem}>
                    <strong>{tool.name}</strong> — {tool.desc}
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
            Практичні навички
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
                key={index}
                className={styles.skillItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {skill}
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
            Наразі вивчаю
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
                key={index}
                className={styles.learningItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item}
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
            Мета роботи з Kali Linux
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
            />
          </motion.div>

          <motion.p
            className={styles.goalText}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Поглибити навички у сфері кібербезпеки та зрозуміти практичні методи тестування й захисту вебзастосунків, інфраструктури та мереж. Застосовувати ці знання у фронтенд-розробці та при роботі з мережевими системами.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Kali;
