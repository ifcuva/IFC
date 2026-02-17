import { motion } from 'framer-motion';
import { hero as heroData } from '../data/home';
import './Hero.css';

const heroImage = '/images/rotundaAbove.png';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__bg">
        <img src={heroImage} alt="" className="hero__img" />
        <div className="hero__overlay" aria-hidden="true" />
      </div>
      <div className="hero__content">
        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroData.title}
        </motion.h1>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {heroData.subtitle}
        </motion.p>
        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="hero__scroll-text">Scroll</span>
          <span className="hero__scroll-line" />
        </motion.div>
      </div>
    </section>
  );
}
