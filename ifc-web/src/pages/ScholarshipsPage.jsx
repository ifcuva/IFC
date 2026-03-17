import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CHAPTER_SCHOLARSHIP_INFO_URL,
  SCHOLARSHIP_CHAIR,
  FUNDING_SUPPORTED_ORGS,
} from '../data/scholarships';
import { smoothScrollTo } from '../utils/smoothScroll';
import './ScholarshipsPage.css';

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

  return (
    <>
      <Navbar />
      <main className="scholarships-page">
        <motion.section
          className="scholarships-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="scholarships-page__hero-title">
            Scholarships and Sponsorships
          </h1>
        </motion.section>

        <div className="scholarships-page__inner">
          <motion.div
            className="scholarships-page__card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Section 1: Scholarship */}
            <section id="scholarship" className="scholarships-page__section">
              <h2 className="scholarships-page__section-title">Scholarship</h2>
            <p className="scholarships-page__section-text">
              The IFC expects its members to uphold the central tenets of
              fraternal organizations—scholarship, leadership, service, and
              brotherhood—and to act with excellence in conduct. Many of our
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
              <a href={`mailto:${SCHOLARSHIP_CHAIR.email}`} className="scholarships-page__contact-email">
                {SCHOLARSHIP_CHAIR.email}
              </a>
            </div>
            </section>

            {/* Section 2: Quentin Alcorn Memorial Scholarship */}
            <section id="quentin-alcorn" className="scholarships-page__section">
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
            </section>

            {/* Section 3: Funding Requests */}
            <section id="funding-requests" className="scholarships-page__section">
            <h2 className="scholarships-page__section-title">Funding Requests</h2>
            <p className="scholarships-page__section-text">
              Each year, the Inter-Fraternity Council supports many different
              CIOs and philanthropic events around Grounds, both run by Greek
              members and non-Greek members. Some of the events and
              organizations we have supported in the past include:
            </p>
            <ul className="scholarships-page__org-list">
              {FUNDING_SUPPORTED_ORGS.map((org) => (
                <li key={org.name}>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scholarships-page__link"
                  >
                    {org.name}
                  </a>
                </li>
              ))}
              <li>…and many more.</li>
            </ul>
            <p className="scholarships-page__section-text">
              If you would like to apply for funding from the Inter-Fraternity
              Council, please fill out the IFC funding request form or contact
              David Gosik, VP Admin.
            </p>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
