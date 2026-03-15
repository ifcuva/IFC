import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { governingBoardMembers } from '../data/governingBoard';
import './GoverningBoardPage.css';

export default function GoverningBoardPage() {
  return (
    <>
      <Navbar />
      <main className="governing-board-page">
        <motion.section
          className="governing-board-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="governing-board-page__hero-title">Governing Board</h1>
        </motion.section>

        <div className="governing-board-page__inner">
          <ul className="governing-board-grid">
            {governingBoardMembers.map((member, i) => (
              <motion.li
                key={member.name + member.position}
                className="governing-board-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.3) }}
              >
                <div className="governing-board-card__photo-wrap">
                  <img
                    src={member.image}
                    alt=""
                    className="governing-board-card__photo"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="governing-board-card__info">
                  <p className="governing-board-card__name">{member.name}</p>
                  <p className="governing-board-card__position">{member.position}</p>
                  <a href={`mailto:${member.email}`} className="governing-board-card__email">
                    {member.email}
                  </a>
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\D/g, '')}`} className="governing-board-card__phone">
                      {member.phone}
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
