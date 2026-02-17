import { motion } from 'framer-motion';
import { quickLinks } from '../data/home';
import './QuickLinks.css';

export default function QuickLinks() {
  return (
    <motion.section
      className="quick-links"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="quick-links__title">Quick Links</h2>
      <ul className="quick-links__list">
        {quickLinks.map((link, i) => (
          <li key={link.href}>
            <a href={link.href} className="quick-links__link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
