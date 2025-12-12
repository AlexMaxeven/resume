import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const AnimatedText = ({ 
  children, 
  as: Component = 'span',
  className = '',
  initial = { opacity: 0, y: 10 },
  animate = { opacity: 1, y: 0 },
  exit = { opacity: 0, y: -10 },
  transition = { duration: 0.3, ease: 'easeInOut' },
  ...props 
}) => {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
        style={{ display: 'inline-block' }}
      >
        <Component className={className} {...props}>
          {children}
        </Component>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedText;

