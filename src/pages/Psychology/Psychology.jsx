import { motion } from 'framer-motion';
import styles from './Psychology.module.css';
import LiquidEther from '../../components/LiquidEther/LiquidEther';
import MagicBento from '../../components/MagicBento/MagicBento';

const Psychology = () => {
  // Напрямки та навички
  const directions = [
    { icon: '👤', title: 'Особиста терапія', description: '2 роки індивідуальної терапії з сертифікованим гештальт-терапевтом' },
    { icon: '🤝', title: 'Робота в трійках', description: '2 роки регулярної практики в форматі «клієнт-терапевт-спостерігач»' },
    { icon: '🌐', title: 'Групова робота', description: 'Участь у динамічних групах впродовж 3 років' },
    { icon: '🎓', title: 'Навчання', description: 'Академія Погодіна — трирічна програма підготовки гештальт-практиків' }
  ];

  // Детальна інформація про напрямки
  const directionsDetailed = {
    personal: {
      title: '👤 Особиста терапія',
      items: [
        '2 роки індивідуальної терапії з сертифікованим гештальт-терапевтом',
        'Опрацювання особистих тем: кордони, тривожність, саморегуляція, емоційна усвідомленість',
        'Формування особистого досвіду проходження терапевтичного процесу'
      ]
    },
    triads: {
      title: '🤝 Робота в трійках (малі терапевтичні групи)',
      items: [
        '2 роки регулярної практики в форматі «клієнт-терапевт-спостерігач»',
        'Розвиток навичок терапевтичної позиції, емпатійного слухання та роботи з феноменологією',
        'Відпрацювання контактних циклів та інтервенцій'
      ]
    },
    group: {
      title: '🌐 Групова робота',
      items: [
        'Участь у динамічних групах впродовж 3 років',
        'Щотижневі групові зустрічі',
        'Щомісячні триденні інтенсиви (глибока проживальна робота, групова динаміка, процесні інтервенції)',
        'Практика усвідомленого контакту, роботи з фрустрацією, емоціями та груповими процесами'
      ]
    },
    education: {
      title: '🎓 Навчання',
      items: [
        'Академія Погодіна — трирічна програма підготовки гештальт-практиків',
        'Теорія гештальт-підходу, цикл контакту, нейрофізіологія емоцій, межі, робота з тілесністю',
        'Навички підтримки, інтервенцій, контейнерування та роботи з «тут-і-зараз»'
      ]
    }
  };

  // Книги
  const books = [
    '«Эго, голод и агрессия» — Фредерік Перлз',
    '«Путешествие в гештальт»',
    '«Осознанность или тревога»',
    '«Управляемое чудо» — Погодін',
    '«Self в отношениях»',
    'Книга Лебедевой и Кумача'
  ];

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
            Психологія
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Гештальт-терапія
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Досвід навчання, особистої терапії та роботи в групах
          </motion.p>
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Протягом трьох років проходив системне навчання в підході гештальт-терапії в Академії Погодіна, поєднуючи теорію з інтенсивною особистою практикою, роботою в малих групах та участю в довготривалих динамічних процесах.
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
            Напрямки та навички
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
            Основні книги з гештальт-терапії
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
