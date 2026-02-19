import { motion, AnimatePresence } from 'framer-motion';
import { welcomeBlocks, publicReleasesLink } from '../data/home';
import './WelcomeSection.css';

const container = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function WelcomeSection({ isOpen, onClose }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          className="welcome-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label="President's welcome letter"
        >
          <motion.div
            className="welcome__inner"
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="welcome__close"
              onClick={onClose}
              aria-label="Close statement"
            >
              Close
            </button>
            <motion.h2 className="welcome__heading" variants={item}>
              Welcome to the Inter-Fraternity Council at the University of Virginia
            </motion.h2>
            <motion.p className="welcome__greeting" variants={item}>
              <strong>Gentlemen of the University of Virginia,</strong>
            </motion.p>
            <div className="welcome__blocks">
              {welcomeBlocks.map((block, i) => (
                <motion.p key={i} className="welcome__block" variants={item}>
                  {block}
                </motion.p>
              ))}
            </div>
            <motion.div className="welcome__signoff" variants={item}>
              <img
                src="/images/pesk.png"
                alt=""
                className="welcome__signoff-photo"
              />
              <div className="welcome__signoff-text">
                <p className="welcome__signoff-intro">Sincerely,</p>
                <p className="welcome__signoff-name">Alex Peskin</p>
                <p className="welcome__signoff-title">President of the UVa Inter-Fraternity Council</p>
              </div>
            </motion.div>
            <motion.p className="welcome__archives" variants={item}>
              To read other statements and releases from the IFC, view archived records:{' '}
              <a href={publicReleasesLink.href}>{publicReleasesLink.label}</a>
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
