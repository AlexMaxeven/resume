# 💼 Резюме-сайт

Сучасний інтерактивний веб-сайт-резюме з анімаціями та React розробкою.

## 🎯 Опис

Персональний сайт-резюме, що демонструє професійний досвід у Frontend розробці на **React**, MikroTik мережах та психології. Включає інтерактивні React компоненти, WebGL анімації та React-додатки з акцентом на сучасну React розробку.

## ✨ Особливості

- **React розробка** - Сучасні React додатки, компоненти та хуки
- **React Router** - Навігація та маршрутизація
- **React Context API** - Управління станом (мова, тема)
- **Інтерактивні анімації** - MagicBento картки, Particles, Galaxy, LiquidEther
- **WebGL фони** - 3D частинки, зоряне небо, рідинні ефекти
- **Багатомовність** - Українська та Англійська мови
- **Адаптивність** - Повна підтримка мобільних пристроїв (320px+)

## 🛠️ Технології

- **React 19** + **Vite** + **React Router DOM** - основна технологічна база
- **React Hooks** - useState, useEffect, useContext, useRef
- **React Context** - LanguageContext, ThemeContext
- **GSAP** + **Framer Motion** - анімації та переходи
- **Three.js** + **OGL** - WebGL графіка
- **CSS Modules** - модульні стилі

## 📄 Сторінки

- **Home** - Резюме, навички, проєкти (Particles фон)
- **About** - Досвід роботи, технічні навички (Particles фон)
- **Contact** - Освіта, розвиток, мови, контакти (LiquidEther фон)
- **Psychology** - Гештальт-терапія, досвід, напрямки роботи (LiquidEther фон)


## 📁 Структура проекту

```
my-app/
├── src/
│   ├── components/          # React компоненти
│   │   ├── ContactForm/     # Форма контактів
│   │   ├── MagicBento/      # Інтерактивні картки
│   │   ├── Particles/       # 3D частинки (WebGL)
│   │   ├── Galaxy/          # Зоряне небо (WebGL)
│   │   ├── LiquidEther/     # Рідинна анімація (WebGL)
│   │   ├── Header/          # Навігація
│   │   ├── Footer/          # Підвал
│   │   ├── Layout/          # Основний layout
│   │   ├── ScrollToTop/     # Скрол до верху
│   │   ├── ScrollToTopButton/ # Кнопка скролу
│   │   ├── SplitText/       # Анімація тексту
│   │   └── AnimatedText/    # Анімований текст
│   ├── pages/               # Сторінки
│   │   ├── Home/            # Головна (Резюме)
│   │   ├── About/            # Про досвід
│   │   ├── Contact/         # Освіта та контакти
│   │   └── Psychology/      # Гештальт-терапія
│   ├── contexts/            # Контексти
│   │   └── LanguageContext.jsx # Контекст мови
│   ├── utils/               # Утиліти
│   ├── assets/              # Зображення та ресурси
│   ├── App.jsx              # Головний компонент
│   ├── main.jsx             # Точка входу
│   ├── index.css            # Глобальні стилі
│   └── translations.js      # Багатомовність
└── README.md                # Цей файл
```

## 📦 Основні залежності

- react, react-dom, react-router-dom
- framer-motion, gsap, @gsap/react
- three, ogl