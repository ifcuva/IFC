import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CHAPTER_SCHOLARSHIP_INFO_URL,
  SCHOLARSHIP_CHAIR,
  SCHOLARSHIP_IMPACT,
  SCHOLARSHIP_TESTIMONIALS,
} from '../data/scholarships';
import { smoothScrollTo } from '../utils/smoothScroll';
import './ScholarshipsPage.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
};

export default function ScholarshipsPage() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      const t = setTimeout(() => smoothScrollTo(el, 800), 100);
      return () => clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  // Testimonial carousel
  const quoteCount = SCHOLARSHIP_TESTIMONIALS.length;
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quotesPaused, setQuotesPaused] = useState(false);
  const goToQuote = (i) => setQuoteIndex((i + quoteCount) % quoteCount);

  useEffect(() => {
    if (quotesPaused) return undefined;
    const id = setTimeout(
      () => setQuoteIndex((i) => (i + 1) % quoteCount),
      6000,
    );
    return () => clearTimeout(id);
  }, [quoteIndex, quotesPaused, quoteCount]);

  return (
    <>
      <Navbar />
      <main className="scholarships-page">
        {/* Hero */}
        <motion.section
          className="scholarships-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="scholarships-page__hero-title">Scholarships</h1>
        </motion.section>

        {/* Scholarship intro — plain text band */}
        <motion.section
          id="scholarship"
          className="scholarships-page__band scholarships-page__band--intro"
          {...fadeUp}
        >
          <div className="scholarships-page__band-inner">
            <h2 className="scholarships-page__section-title">Scholarship</h2>
            <p className="scholarships-page__section-text">
              The IFC expects its members to uphold the central tenets of
              fraternal organizations (scholarship, leadership, service, and
              brotherhood) and to act with excellence in conduct. Many of our
              chapters offer scholarships and academic support to their members.
            </p>
            <p className="scholarships-page__section-text">
              For chapter-by-chapter scholarship information, eligibility, and
              application details, see the IFC chapter scholarship spreadsheet:
            </p>
            <a
              href={CHAPTER_SCHOLARSHIP_INFO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="scholarships-page__link"
            >
              IFC Chapter Scholarship Information (spreadsheet)
            </a>
            <div className="scholarships-page__contact">
              <p className="scholarships-page__contact-label">Questions?</p>
              <p className="scholarships-page__contact-name">{SCHOLARSHIP_CHAIR.name}</p>
              <p className="scholarships-page__contact-position">{SCHOLARSHIP_CHAIR.position}</p>
              <a
                href={`mailto:${SCHOLARSHIP_CHAIR.email}`}
                className="scholarships-page__contact-email"
              >
                {SCHOLARSHIP_CHAIR.email}
              </a>
            </div>
          </div>
        </motion.section>

        {/* The Impact of Your Support — cool tinted band with quote coverflow */}
        <motion.section
          className="scholarships-page__band scholarships-page__band--impact"
          {...fadeUp}
        >
          <div className="scholarships-page__band-inner">
            <h2 className="scholarships-page__impact-title">
              The Impact of Your Support
            </h2>
            {SCHOLARSHIP_IMPACT.map((para) => (
              <p key={para.slice(0, 24)} className="scholarships-page__impact-text">
                {para}
              </p>
            ))}

            <div
              className="scholarships-page__coverflow"
              onMouseEnter={() => setQuotesPaused(true)}
              onMouseLeave={() => setQuotesPaused(false)}
            >
              <button
                type="button"
                className="scholarships-page__carousel-arrow scholarships-page__carousel-arrow--prev"
                aria-label="Previous quote"
                onClick={() => goToQuote(quoteIndex - 1)}
              >
                &#8249;
              </button>

              <div className="scholarships-page__coverflow-stage">
                {SCHOLARSHIP_TESTIMONIALS.map((t, i) => {
                  const rel = (i - quoteIndex + quoteCount) % quoteCount;
                  let pos = 'hidden';
                  if (rel === 0) pos = 'center';
                  else if (rel === 1) pos = 'right';
                  else if (rel === quoteCount - 1) pos = 'left';
                  return (
                    <figure
                      key={t.attribution + i}
                      className={`scholarships-page__voice scholarships-page__voice--${pos}`}
                      aria-hidden={pos !== 'center'}
                      onClick={pos === 'left' || pos === 'right' ? () => goToQuote(i) : undefined}
                    >
                      <blockquote className="scholarships-page__voice-text">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="scholarships-page__voice-author">
                        {t.attribution}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>

              <button
                type="button"
                className="scholarships-page__carousel-arrow scholarships-page__carousel-arrow--next"
                aria-label="Next quote"
                onClick={() => goToQuote(quoteIndex + 1)}
              >
                &#8250;
              </button>
            </div>

            <div className="scholarships-page__carousel-dots">
              {SCHOLARSHIP_TESTIMONIALS.map((t, i) => (
                <button
                  type="button"
                  key={t.attribution + i}
                  className={
                    i === quoteIndex
                      ? 'scholarships-page__carousel-dot scholarships-page__carousel-dot--active'
                      : 'scholarships-page__carousel-dot'
                  }
                  aria-label={`Go to quote ${i + 1}`}
                  aria-current={i === quoteIndex}
                  onClick={() => goToQuote(i)}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Quentin Alcorn Memorial Scholarship — plain text band */}
        <motion.section
          id="quentin-alcorn"
          className="scholarships-page__band scholarships-page__band--quent"
          {...fadeUp}
        >
          <div className="scholarships-page__band-inner">
            <h2 className="scholarships-page__section-title">
              Quentin Alcorn Memorial Scholarship
            </h2>
            <p className="scholarships-page__section-text">
              The Quentin Alcorn Memorial Scholarship honors Quentin Thomas
              Alcorn (Class of 2016), who was president of the Xi Chapter of
              Theta Chi Fraternity at UVA. Quent was a Chemical Engineering
              major, Virginia State Wrestling Champion, and dedicated community
              member who passed away on June 15, 2015.
            </p>
            <p className="scholarships-page__section-text">
              The scholarship recognizes active members in good standing of
              UVA&apos;s Greek community who have positively impacted the
              University and Charlottesville communities. Recipients are selected
              for exemplifying Quent&apos;s characteristics of dedication,
              selfless service, love of learning, and capacity for fun and
              humor.
            </p>
            <p className="scholarships-page__section-text">
              Applications are submitted through AwardSpring and must be
              received by the stated deadline. For questions about the
              scholarship, contact{' '}
              <a href="mailto:alumni-scholarships@virginia.edu" className="scholarships-page__link">
                alumni-scholarships@virginia.edu
              </a>
              . For IFC-related questions, you may also contact the Scholarship
              Chair, {SCHOLARSHIP_CHAIR.name}, at{' '}
              <a href={`mailto:${SCHOLARSHIP_CHAIR.email}`} className="scholarships-page__link">
                {SCHOLARSHIP_CHAIR.email}
              </a>
              .
            </p>
          </div>
        </motion.section>

        {/* Help Make This Experience Possible CTA */}
        <motion.section className="scholarships-page__give" {...fadeUp}>
          <div className="scholarships-page__give-inner">
            <h2 className="scholarships-page__give-title">
              Help Make This Experience Possible
            </h2>
            <p className="scholarships-page__give-text">
              A contribution to the scholarship program helps give more UVA
              students the opportunity to experience fraternity life regardless
              of their financial circumstances. Your support can open the door
              to community, mentorship, leadership, academic support, and
              relationships that extend far beyond a student&apos;s time at UVA.
            </p>
            <p className="scholarships-page__give-contact">
              Contact {SCHOLARSHIP_CHAIR.name} ({SCHOLARSHIP_CHAIR.email}) to Support
            </p>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
