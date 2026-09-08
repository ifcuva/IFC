import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FUNDING_SUPPORTED_ORGS } from '../data/scholarships';
import './SponsorshipsPage.css';

export default function SponsorshipsPage() {
  return (
    <>
      <Navbar />
      <main className="sponsorships-page">
        <motion.section
          className="sponsorships-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="sponsorships-page__hero-title">Sponsorships</h1>
        </motion.section>

        <div className="sponsorships-page__inner">
          <motion.div
            className="sponsorships-page__card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <section id="funding-requests" className="sponsorships-page__section">
              <h2 className="sponsorships-page__section-title">Funding Requests</h2>
              <p className="sponsorships-page__section-text">
                Each year, the Inter-Fraternity Council supports many different
                CIOs and philanthropic events around Grounds, both run by Greek
                members and non-Greek members. Some of the events and
                organizations we have supported in the past include:
              </p>

              <ul className="sponsorships-page__org-grid">
                {FUNDING_SUPPORTED_ORGS.map((org) => (
                  <li key={org.name}>
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sponsorships-page__org-chip"
                    >
                      <span>{org.name}</span>
                      <span className="sponsorships-page__org-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="sponsorships-page__more">…and many more.</p>

              <div className="sponsorships-page__apply">
                <p className="sponsorships-page__section-text">
                  If you would like to apply for funding from the Inter-Fraternity
                  Council, please fill out the IFC funding request form or contact{' '}
                  <a href="mailto:kjf7qz@virginia.edu" className="sponsorships-page__link">
                    David Gosik, VP Admin
                  </a>
                  .
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
