import { motion } from 'framer-motion';
import { disclaimer, footer } from '../data/home';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__disclaimer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="footer__disclaimer-title">Organization Clarification</h3>
        <p className="footer__disclaimer-text">{disclaimer}</p>
      </motion.div>
      <div className="footer__bottom">
        <p className="footer__copyright">{footer.copyright}</p>
      </div>
    </footer>
  );
}
