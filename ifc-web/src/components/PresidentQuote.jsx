import { motion } from 'framer-motion';
import { presidentQuote, president } from '../data/home';
import './PresidentQuote.css';

export default function PresidentQuote({ onReadStatement }) {
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
            src="/images/headshots/pesk.png"
            alt=""
            className="president-quote__photo"
            loading="lazy"
            decoding="async"
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
          {onReadStatement && (
            <button
              type="button"
              className="president-quote__read-statement"
              onClick={onReadStatement}
            >
              Read the statement from the president
            </button>
          )}
        </div>
      </div>
    </motion.section>
  );
}
