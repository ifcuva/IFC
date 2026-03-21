import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { slugToName, getCanonicalChapterSlug } from '../utils/slugs';
import { getGreekForChapter } from '../data/chapterGreek';
import { getChapterImage, getChapterContent } from '../data/chapterContent';
import './ChapterPage.css';

const DEFAULT_CHAPTER_IMAGE = '/images/rotunda1.png';

function getDetailType(label = '') {
  const normalized = label.toLowerCase().trim();
  if (normalized === 'president') return 'president';
  if (normalized.includes('rush chair')) return 'rushChair';
  if (normalized.includes('alumni chair') || normalized.includes('alumni relations chair')) {
    return 'alumniChair';
  }
  if (normalized.includes('philanthropy chair')) return 'philanthropyChair';
  if (normalized === 'philanthropy') return 'philanthropy';
  if (normalized.includes('chapter size') || normalized.includes('charge size')) return 'chapterSize';
  if (normalized.includes('date founded')) return 'dateFounded';
  return null;
}

function getChapterSizeLabel(originalLabel = '') {
  const normalized = originalLabel.trim();
  const match = normalized.match(/as of\s+(.+)$/i);
  if (match) return `Chapter Size as of ${match[1].trim()}`;
  return normalized || 'Chapter Size';
}

export default function ChapterPage() {
  const { slug } = useParams();
  const canonicalSlug = slug ? getCanonicalChapterSlug(slug) : null;

  if (slug && canonicalSlug && canonicalSlug !== slug.toLowerCase().trim()) {
    return <Navigate to={`/chapters/${canonicalSlug}`} replace />;
  }

  const name = slug ? slugToName(canonicalSlug || slug) : 'Chapter';
  const greek = getGreekForChapter(name);
  const image = getChapterImage(name) || DEFAULT_CHAPTER_IMAGE;
  const content = getChapterContent(name);
  const orderedDetailTypes = [
    'president',
    'rushChair',
    'alumniChair',
    'philanthropyChair',
    'philanthropy',
    'chapterSize',
    'dateFounded',
  ];
  const detailsByType = new Map();

  if (content?.details && content.details.length > 0) {
    content.details.forEach((item) => {
      const type = getDetailType(item.label);
      if (!type || detailsByType.has(type)) return;
      detailsByType.set(type, item);
    });
  }

  const displayDetails = orderedDetailTypes
    .filter((type) => detailsByType.has(type))
    .map((type) => {
      const item = detailsByType.get(type);
      let displayLabel = item.label;

      if (type === 'rushChair') displayLabel = 'Rush Chair';
      if (type === 'alumniChair') displayLabel = 'Alumni Chair';
      if (type === 'philanthropyChair') displayLabel = 'Philanthropy Chair';
      if (type === 'chapterSize') displayLabel = getChapterSizeLabel(item.label);
      if (type === 'dateFounded') displayLabel = 'Date Founded at UVA';

      return { ...item, displayLabel };
    });

  return (
    <>
      <Navbar />
      <main className="chapter-page">
        <section className="chapter-page__top">
          <div className="chapter-page__photo-wrap">
            <img src={image} alt="" className="chapter-page__photo" loading="lazy" decoding="async" />
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

            {displayDetails.length > 0 && (
              <motion.ul
                className="chapter-page__details"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
              >
                {displayDetails.map((item, i) => (
                  <li key={i}>
                    <strong>{item.displayLabel}:</strong>{' '}
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