import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { recruitmentFaqs } from '../data/recruitmentFaq';
import './RecruitmentFaqPage.css';

export default function RecruitmentFaqPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <Navbar />
      <main className="recruitment-faq-page">
        <div className="recruitment-faq-page__inner">
          <motion.header
            className="recruitment-faq-page__header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="recruitment-faq-page__title">
              <span className="recruitment-faq-page__line" aria-hidden="true" />
              <span className="recruitment-faq-page__title-text">Recruitment FAQs</span>
              <span className="recruitment-faq-page__line" aria-hidden="true" />
            </h1>
            <p className="recruitment-faq-page__intro">
              Common questions about joining an IFC fraternity at UVA. Have more questions? Reach out to the IFC executive board or visit our recruitment events.
            </p>
          </motion.header>

          <motion.section
            className="recruitment-faq-page__list"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.06 },
              },
              hidden: {},
            }}
          >
            {recruitmentFaqs.map((faq, i) => (
              <motion.article
                key={faq.id}
                className={`faq-item ${openId === faq.id ? 'faq-item--open' : ''}`}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <button
                  type="button"
                  className="faq-item__trigger"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-question-${faq.id}`}
                >
                  <span className="faq-item__question">{faq.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      className="faq-item__answer-wrap"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                      role="region"
                      aria-labelledby={`faq-question-${faq.id}`}
                    >
                      <div className="faq-item__answer">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </motion.section>

          <motion.div
            className="recruitment-faq-page__cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="recruitment-faq-page__cta-text">Ready to explore?</p>
            <Link to="/recruitment/spring-2026" className="recruitment-faq-page__cta-link">
              View Spring 2026 recruitment schedule
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
