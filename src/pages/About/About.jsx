import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Кар'єра</span>
          <h1 className={styles.title}>Досвід та навички</h1>
          <p className={styles.subtitle}>
            Технічний стек та професійний шлях
          </p>
        </div>
      </section>

      <section className={styles.skills}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Технічні навички</h2>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>⚛️</span>
                Frontend
              </h3>
              <p className={styles.skillList}>
                React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind, Vite, Redux, jQuery, PHP
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🔗</span>
                Інтеграції
              </h3>
              <p className={styles.skillList}>
                Binom, Keitaro, Ecco, StatCounter, Google Analytics
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🛡️</span>
                Захист коду
              </h3>
              <p className={styles.skillList}>
                Мініфікація, обфускація, контроль середовищ збірки
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🌐</span>
                Network / DevOps
              </h3>
              <p className={styles.skillList}>
                MikroTik RouterOS, WireGuard, L2TP/IPsec, DHCP, Failover, Firewall, маршрутизація, Netwatch, VPS-сервера, Mangle-правила, EIOP
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>📡</span>
                Мережеві технології
              </h3>
              <p className={styles.skillList}>
                Налаштування оптичних каналів, статичних провайдерів, резервування з'єднань, балансування трафіку
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🛰️</span>
                Starlink
              </h3>
              <p className={styles.skillList}>
                Первинна активація, налаштування додатку та інтеграція зі шлюзами
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🔧</span>
                Обладнання
              </h3>
              <p className={styles.skillList}>
                MikroTik, TP-Link, Netis, Huawei, Starlink, Motorola, Garmin GPSMAP / Montana
              </p>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>
                <span className={styles.skillIcon}>🔐</span>
                Безпека
              </h3>
              <p className={styles.skillList}>
                Kali Linux, DOMPurify, базова веб-захист (XSS, CSRF)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Досвід роботи</h2>

          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>Frontend Developer / Team Lead</h3>
                    <p className={styles.jobCompany}>IT Studio / Freelance Projects</p>
                  </div>
                  <span className={styles.jobPeriod}>2021 — Літо 2025</span>
                </div>
                <ul className={styles.jobList}>
                  <li>Розробка, оптимізація та підтримка веб-інтерфейсів (React.js, Vite, Tailwind)</li>
                  <li>Створення власних збірок для різних проєктів, інтеграція з Binom, Keitaro, Ecco</li>
                  <li>Впровадження захисту: обфускація, мініфікація, контроль оточення продакшн-білдів</li>
                  <li>Керування командою до 10 розробників, розподіл завдань, рев'ю коду</li>
                  <li>Оптимізація UI/UX та впровадження базових заходів фронтенд-безпеки</li>
                </ul>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>Військовий зв'язківець / Network Specialist</h3>
                    <p className={styles.jobCompany}>Відділ зв'язку (ЗСУ) 🇺🇦</p>
                  </div>
                  <span className={styles.jobPeriod}>серпень 2025 — дотепер</span>
                </div>
                <ul className={styles.jobList}>
                  <li>Налаштування, прошивка та адміністрування маршрутизаторів MikroTik, Netis, TP-Link</li>
                  <li>Робота з оптичними лініями, статичними провайдерами та динамічними DHCP-з'єднаннями</li>
                  <li>Організація резервних каналів зв'язку, балансування провайдерів, Failover</li>
                  <li>Налаштування Mangle-правил для базового розподілення трафіку та ресурсів</li>
                  <li>Створення та обслуговування VPS MikroTik-сервера</li>
                  <li>Моніторинг мережі через Netwatch, автоматичне перемикання маршрутів</li>
                  <li>Налаштування firewall-правил, VPN-каналів (WireGuard, L2TP), DHCP</li>
                  <li>Робота з Starlink: активація через додаток, налаштування шлюзу, тестування з'єднання</li>
                  <li>Робота з Garmin навігаторами (прошивка, мапи, налаштування)</li>
                  <li>Налаштування та підтримка акаунтів Кропива</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
