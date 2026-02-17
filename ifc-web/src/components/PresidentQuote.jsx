import { motion } from 'framer-motion';
import { presidentQuote, president } from '../data/home';
import './PresidentQuote.css';

export default function PresidentQuote() {
  return (
    <motion.section
      className="president-quote"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="president-quote__inner">
        <div className="president-quote__photo-wrap">
          <img
            src="/images/pres.png"
            alt=""
            className="president-quote__photo"
          />
        </div>
        <div className="president-quote__body">
          <blockquote className="president-quote__text">
            "{presidentQuote}"
          </blockquote>
          <cite className="president-quote__cite">
            <a href={president.href}>{president.name}</a>
            <span className="president-quote__title">{president.title}</span>
          </cite>
        </div>
      </div>
    </motion.section>
  );
}
