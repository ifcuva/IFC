import { motion } from 'framer-motion';
import { hero as heroData } from '../data/home';
import './Hero.css';

const heroVideo = '/videos/ifc-hero-2.mp4';
const heroPoster = '/images/rotundaAbove.png';

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__bg">
        <video
          className="hero__video"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        />
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
      </div>
    </section>
  );
}
