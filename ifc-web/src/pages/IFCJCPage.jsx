import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './IFCJCPage.css';

const DOCUMENTS = [
  { label: 'Judiciary Committee Standards & Procedures', href: '/ifc-jc/ifcjc_standards.pdf', download: 'ifcjc_standards.pdf' },
  { label: 'IFC Standards of Conduct', href: '/ifc-jc/ifcjc-standards-of-conduct.pdf', download: 'ifcjc-standards-of-conduct.pdf' },
  { label: 'IFC Standards for Parties and Social Events', href: '/ifc-jc/inside_party_standards.pdf', download: 'inside_party_standards.pdf' },
  { label: 'IFC Rush Regulation', href: '/ifc-jc/ifcjc-rush-regulations1.pdf', download: 'ifcjc-rush-regulations1.pdf' },
];

export default function IFCJCPage() {
  return (
    <>
      <Navbar />
      <main className="ifcjc-page">
        <motion.section
          className="ifcjc-page__hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="ifcjc-page__hero-title">IFC Judiciary Committee</h1>
        </motion.section>

        <div className="ifcjc-page__inner">
          <motion.article
            className="ifcjc-card"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="ifcjc-card__section">
              <p className="ifcjc-card__intro">
                Welcome to the webpage of the Inter-Fraternity Council Judiciary Committee (IFCJC), the judicial body of the IFC.
              </p>
            </div>

            <div className="ifcjc-card__section">
              <p>
                The IFCJC is the student self-governed body with the authority to adjudicate cases involving violations of the IFC Standards of Conduct by the 24 IFC fraternities. The committee is comprised of student support officers who act as investigators, counselors, and judges, investigating alleged cases of fraternity misconduct, representing the parties involved, and hearing the cases in trial, respectively. Leading the IFCJC are the eight Executive Committee members who act as trial chairmen and lead the support officer pools. Anyone can{' '}
                <a
                  href="/ifc-jc/ifcjc_info_complainants.pdf"
                  className="ifcjc-card__link ifcjc-card__link--complaint"
                  download="ifcjc_info_complainants.pdf"
                >
                  file a complaint
                </a>
                {' '}with the IFCJC.
              </p>
              <p>
                As student organizations at the University of Virginia, IFC fraternity chapters are also subject to adjudication by the University Judiciary Committee. UJC statistics can be found at{' '}
                <a
                  href="https://ujc.virginia.edu"
                  className="ifcjc-card__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ujc.virginia.edu
                </a>
                .
              </p>
            </div>

            <div className="ifcjc-card__section">
              <h2 className="ifcjc-card__heading">Important Documents</h2>
              <ul className="ifcjc-card__doc-list">
                {DOCUMENTS.map((doc) => (
                  <li key={doc.href}>
                    <a
                      href={doc.href}
                      className="ifcjc-card__doc-link"
                      download={doc.download}
                    >
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ifcjc-card__section">
              <p>
                The IFC expects its members not only to uphold the central tenets of fraternal organizations—scholarship, leadership, service, and brotherhood—but to act with excellence in conduct, exercising accountability and responsibility. The IFCJC serves to support this goal and to maintain the health of our community.
              </p>
            </div>

            <div className="ifcjc-card__section ifcjc-card__section--contact">
              <p className="ifcjc-card__contact">
                Please direct any questions regarding the website, alleged fraternity misconduct, or other relevant concerns to <strong>Andrew Escobar</strong>, Vice President for Judiciary.
              </p>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}
