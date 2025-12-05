import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.label}>Профіль</span>
          <h1 className={styles.title}>Освіта та контакти</h1>
          <p className={styles.subtitle}>
            Освітній шлях, розвиток та способи зв'язку
          </p>
        </div>
      </section>

      <section className={styles.education}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Освіта</h2>
          
          <div className={styles.eduGrid}>
            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>🎓</div>
              <div className={styles.eduContent}>
                <h3 className={styles.eduTitle}>Бакалавр, Логістика</h3>
                <p className={styles.eduPlace}>Національний університет біоресурсів і природокористування України (НУБіП)</p>
              </div>
            </div>

            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>🎓</div>
              <div className={styles.eduContent}>
                <h3 className={styles.eduTitle}>Магістр, Адміністративний менеджмент</h3>
                <p className={styles.eduPlace}>Київський політехнічний інститут (КПІ)</p>
              </div>
            </div>

            <div className={styles.eduCard}>
              <div className={styles.eduIcon}>🧠</div>
              <div className={styles.eduContent}>
                <h3 className={styles.eduTitle}>Гештальт-терапія</h3>
                <p className={styles.eduPlace}>Академія психотерапії — 3 роки навчання</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.development}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Поточний розвиток</h2>
          
          <div className={styles.devContent}>
            <div className={styles.devCard}>
              <div className={styles.devIcon}>🔐</div>
              <p className={styles.devText}>
                Вивчаю <strong>кібербезпеку</strong>: Kali Linux, принципи web-захисту, XSS/CSRF, DOMPurify. Здебільшого розвиток та навчання через документацію та штучний інтелект — який мені і формує навчання. В перспективі проходження платних курсів та поглиблення базових знань в цьому напрямку.
              </p>
            </div>
            <div className={styles.devCard}>
              <div className={styles.devIcon}>🛡️</div>
              <p className={styles.devText}>
                Розширюю знання у <strong>захисті веб-додатків</strong>, мережевій та прикладній безпеці.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.languages}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Мови</h2>
          
          <div className={styles.langGrid}>
            <div className={styles.langCard}>
              <span className={styles.langFlag}>🇺🇦</span>
              <div className={styles.langInfo}>
                <h3 className={styles.langName}>Українська</h3>
                <span className={styles.langLevel}>Рідна</span>
              </div>
            </div>
            <div className={styles.langCard}>
              <span className={styles.langFlag}>🇬🇧</span>
              <div className={styles.langInfo}>
                <h3 className={styles.langName}>Англійська</h3>
                <span className={styles.langLevel}>B2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.qualities}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Додаткові якості</h2>
          
          <div className={styles.qualContent}>
            <p className={styles.qualText}>
              Відповідальність, уважність до деталей, системне мислення, вміння координувати команду та знаходити ефективні рішення.
            </p>
            <p className={styles.qualText}>
              Поєдную практичний досвід <strong>frontend-розробки</strong>, <strong>мережевих технологій</strong> і розуміння людської поведінки, що дозволяє ефективно будувати комунікацію та керувати процесами.
            </p>
          </div>

          <div className={styles.qualTags}>
            <span className={styles.qualTag}>Відповідальність</span>
            <span className={styles.qualTag}>Уважність до деталей</span>
            <span className={styles.qualTag}>Системне мислення</span>
            <span className={styles.qualTag}>Лідерство</span>
            <span className={styles.qualTag}>Комунікація</span>
            <span className={styles.qualTag}>Координація команди</span>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Контакти</h2>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Email</span>
                <span className={styles.contactValue}>ax.zaver****@gmail.com</span>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Телефон</span>
                <span className={styles.contactValue}>063 034 ** **</span>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Локація</span>
                <span className={styles.contactValue}>Київ, Україна</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
