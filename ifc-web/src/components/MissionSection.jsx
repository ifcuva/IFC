import { motion } from 'framer-motion';
import { mission } from '../data/home';
import './MissionSection.css';

export default function MissionSection() {
  return (
    <motion.section
      className="mission"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="mission__inner">
        <p className="mission__statement">{mission.statement}</p>
      </div>
    </motion.section>
  );
}
