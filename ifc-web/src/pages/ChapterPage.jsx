import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { slugToName } from '../utils/slugs';
import { getGreekForChapter } from '../data/chapterGreek';
import { getChapterImage, getChapterContent } from '../data/chapterContent';
import './ChapterPage.css';

const DEFAULT_CHAPTER_IMAGE = '/images/rotunda1.png';

export default function ChapterPage() {
  const { slug } = useParams();
  const name = slug ? slugToName(slug) : 'Chapter';
  const greek = getGreekForChapter(name);
  const image = getChapterImage(name) || DEFAULT_CHAPTER_IMAGE;
  const content = getChapterContent(name);

  return (
    <>
      <Navbar />
      <main className="chapter-page">
        <section className="chapter-page__top">
          <div className="chapter-page__photo-wrap">
            <img src={image} alt="" className="chapter-page__photo" />
          </div>
          <div className="chapter-page__header">
            <motion.nav
              className="chapter-page__breadcrumb"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/chapters">Chapters</Link>
              <span className="chapter-page__breadcrumb-sep">/</span>
              <span>{name}</span>
            </motion.nav>

            <motion.h1
              className="chapter-page__title"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              {greek !== name ? (
                <>
                  <span className="chapter-page__title-greek">{greek}</span>
                  <span className="chapter-page__title-name">{name}</span>
                </>
              ) : (
                name
              )}
            </motion.h1>

            {content?.subtitle && (
              <motion.p
                className="chapter-page__subtitle"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06 }}
              >
                {content.subtitle}
              </motion.p>
            )}

            {content?.details && content.details.length > 0 && (
              <motion.ul
                className="chapter-page__details"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                {content.details.map((item, i) => (
                  <li key={i}>
                    <strong>{item.label}:</strong>{' '}
                    {item.href ? (
                      <a href={item.href} className="chapter-page__detail-link">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        </section>

        <section className="chapter-page__body">
          {content ? (
            <>
              {content.paragraphs?.map((para, i) => (
                <p key={i} className="chapter-page__para">
                  {para}
                </p>
              ))}
              {content.links && content.links.length > 0 && (
                <p className="chapter-page__links">
                  {content.links.map((link, i) => (
                    <span key={i}>
                      {i > 0 && ' | '}
                      <a href={link.href} className="chapter-page__link">
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </>
          ) : (
            <>
              <p className="chapter-page__placeholder">
                This is the chapter page for <strong>{name}</strong>. Add a brief description,
                history, leadership, events, and contact information here.
              </p>
              <div className="chapter-page__blocks">
                <section className="chapter-page__block">
                  <h2>About</h2>
                  <p>
                    Add a short description of the chapter, its founding at UVA, and what makes it
                    unique.
                  </p>
                </section>
                <section className="chapter-page__block">
                  <h2>Leadership</h2>
                  <p>List current officers, positions, and contact if desired.</p>
                </section>
                <section className="chapter-page__block">
                  <h2>Contact</h2>
                  <p>Chapter email, social links, or other contact details.</p>
                </section>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
