import { motion, AnimatePresence } from 'framer-motion';
import { welcomeBlocks, publicReleasesLink } from '../data/home';
import './WelcomeSection.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function WelcomeSection({ isOpen, onClose, letterRef }) {
  return (
    <section
      ref={letterRef}
      className={`welcome ${isOpen ? 'welcome--open' : 'welcome--closed'}`}
      aria-hidden={!isOpen}
    >
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="welcome__inner"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                src="/images/pres.png"
                alt=""
                className="welcome__signoff-photo"
              />
              <div className="welcome__signoff-text">
                <p className="welcome__signoff-intro">Sincerely,</p>
                <p className="welcome__signoff-name">Ryan Phelan</p>
                <p className="welcome__signoff-title">President of the UVa Inter-Fraternity Council</p>
              </div>
            </motion.div>
            <motion.p className="welcome__archives" variants={item}>
              To read other statements and releases from the IFC, view archived records:{' '}
              <a href={publicReleasesLink.href}>{publicReleasesLink.label}</a>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
