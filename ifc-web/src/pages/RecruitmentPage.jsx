import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { recruitmentFaqs } from '../data/recruitmentFaq';
import './RecruitmentPage.css';

export default function RecruitmentPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <Navbar />
      <main className="recruitment-page">
        <motion.section
          className="recruitment-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="recruitment-page__hero-title">Recruitment</h1>
        </motion.section>

        <div className="recruitment-page__inner">
          <motion.div
            className="recruitment-page__signup"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h2 className="recruitment-page__signup-title">
              Register for Spring 2027 Rush
            </h2>
            <a
              href="https://uvaifc2027.mycampusdirector2.com/"
              className="recruitment-page__signup-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up here
            </a>
          </motion.div>

          <motion.section
            className="recruitment-page__faq"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            <h2 className="recruitment-page__faq-heading">FAQs</h2>
            <p className="recruitment-page__faq-intro">
              Common questions about joining an IFC fraternity at UVA.
            </p>
            <div className="recruitment-page__faq-list">
              {recruitmentFaqs.map((faq) => (
                <motion.article
                  key={faq.id}
                  className={`recruitment-page__faq-item ${openId === faq.id ? 'recruitment-page__faq-item--open' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <button
                    type="button"
                    className="recruitment-page__faq-trigger"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    aria-expanded={openId === faq.id}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                  >
                    <span className="recruitment-page__faq-question">{faq.question}</span>
                    <span className="recruitment-page__faq-icon" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openId === faq.id && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        className="recruitment-page__faq-answer-wrap"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        role="region"
                        aria-labelledby={`faq-question-${faq.id}`}
                      >
                        <div className="recruitment-page__faq-answer">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
