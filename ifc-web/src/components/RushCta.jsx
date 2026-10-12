import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rushCta } from '../data/home';
import './RushCta.css';

export default function RushCta() {
  return (
    <motion.section
      className="rush-cta"
      aria-label="Rush registration"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="rush-cta__inner">
        <p className="rush-cta__eyebrow">Recruitment</p>
        <p className="rush-cta__headline">{rushCta.headline}</p>
        <div className="rush-cta__offer" aria-label={`Early bird registration is ${rushCta.earlyBirdPrice}`}>
          <span className="rush-cta__price">{rushCta.earlyBirdPrice}</span>
          <span className="rush-cta__offer-copy">
            <strong>Early bird registration</strong>
            Register by {rushCta.earlyBirdDeadline}. Price increases to{' '}
            {rushCta.regularPrice} on {rushCta.earlyBirdDeadline}.
          </span>
        </div>
        <Link to={rushCta.href} className="rush-cta__link">
          {`${rushCta.buttonLabel} →`}
        </Link>
      </div>
    </motion.section>
  );
}
