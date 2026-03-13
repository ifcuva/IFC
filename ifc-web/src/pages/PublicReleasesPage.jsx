import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ARCHIVED_RELEASES_PDF } from '../data/publicReleases';
import './PublicReleasesPage.css';

export default function PublicReleasesPage() {
  return (
    <>
      <Navbar />
      <main className="public-releases-page">
        <motion.section
          className="public-releases-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="public-releases-page__hero-title">Public Releases</h1>
        </motion.section>

        <div className="public-releases-page__inner">
          <motion.section
            className="public-releases-page__current"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h2 className="public-releases-page__section-title">Current releases</h2>
            <p className="public-releases-page__text">
              Any new releases from the IFC will be displayed here.
            </p>
          </motion.section>

          <motion.section
            className="public-releases-page__archive"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <h2 className="public-releases-page__section-title">Archived releases</h2>
            <p className="public-releases-page__text">
              View archived releases below.
            </p>
            <div className="public-releases-page__pdf-wrap">
              <iframe
                title="Archived IFC releases (PDF)"
                src={ARCHIVED_RELEASES_PDF}
                className="public-releases-page__pdf-frame"
              />
            </div>
            <p className="public-releases-page__download-note">
              <a
                href={ARCHIVED_RELEASES_PDF}
                download
                className="public-releases-page__download-link"
              >
                Download PDF
              </a>
              {' '}
              if you prefer to save a copy.
            </p>
          </motion.section>

          <p className="public-releases-page__back">
            <Link to="/governing-board" className="public-releases-page__back-link">
              Back to Governing Board
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
