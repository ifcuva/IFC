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
        <header className="recruitment-page__header">
          <div className="recruitment-page__header-inner">
            <h1 className="recruitment-page__title">Recruitment</h1>
          </div>
        </header>

        <section className="recruitment-page__registration" aria-labelledby="registration-title">
          <div className="recruitment-page__registration-inner">
            <div className="recruitment-page__registration-top">
              <div>
                <h2 id="registration-title" className="recruitment-page__registration-title">
                  Register for Spring 2027 Rush
                </h2>
              </div>
              <a
                href="https://uvaifc2027.mycampusdirector2.com/"
                className="recruitment-page__signup-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click Here to Register
              </a>
            </div>

            <p className="recruitment-page__dates">January 23–February 6, 2027</p>
          </div>
        </section>

        <div className="recruitment-page__inner">
          <section className="recruitment-page__overview" aria-labelledby="overview-title">
            <h2 id="overview-title">How recruitment works</h2>
            <p>
              Recruitment gives you a chance to meet members, visit chapters, and decide where you
              feel most at home. Chapters also use that time to get to know prospective members
              before extending bids.
            </p>
          </section>

          <section className="recruitment-page__faq" aria-labelledby="faq-title">
            <h2 id="faq-title" className="recruitment-page__faq-heading">
              Frequently asked questions
            </h2>
            <div className="recruitment-page__faq-list">
              {recruitmentFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <article
                    key={faq.id}
                    className={`recruitment-page__faq-item ${isOpen ? 'recruitment-page__faq-item--open' : ''}`}
                  >
                    <button
                      type="button"
                      className="recruitment-page__faq-trigger"
                      onClick={() => setOpenId(isOpen ? null : faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      id={`faq-question-${faq.id}`}
                    >
                      <span className="recruitment-page__faq-question">{faq.question}</span>
                      <span className="recruitment-page__faq-icon" aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${faq.id}`}
                          className="recruitment-page__faq-answer-wrap"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: 'spring', bounce: 0, duration: 0.32 }}
                          role="region"
                          aria-labelledby={`faq-question-${faq.id}`}
                        >
                          <div className="recruitment-page__faq-answer">
                            {faq.answer}
                            {faq.link && (
                              <>
                                {' '}
                                <a href={faq.link} target="_blank" rel="noopener noreferrer">
                                  Open the fee waiver form
                                </a>
                              </>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="recruitment-page__contact" aria-labelledby="contact-title">
            <p className="recruitment-page__contact-label">Questions?</p>
            <h2 id="contact-title">Ask Jack Copeland</h2>
            <p>Vice President of Membership</p>
            <a
              href="mailto:ifcvicepresidentofmembership@gmail.com"
              className="recruitment-page__contact-link"
            >
              ifcvicepresidentofmembership@gmail.com
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
