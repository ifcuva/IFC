import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { nameToSlug } from '../utils/slugs';
import { getGreekForChapter } from '../data/chapterGreek';
import './ChaptersPage.css';

export default function ChaptersPage() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/chapters.json')
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        list.sort((a, b) => {
          const greekA = getGreekForChapter(a);
          const greekB = getGreekForChapter(b);
          return greekA.localeCompare(greekB, 'el');
        });
        setChapters(list);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <main className="chapters-page">
        <div className="chapters-page__inner">
          <motion.header
            className="chapters-page__header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="chapters-page__title">
              <span className="chapters-page__line" aria-hidden="true" />
              <span className="chapters-page__title-text">Our Chapters</span>
              <span className="chapters-page__line" aria-hidden="true" />
            </h1>
            <p className="chapters-page__intro">
              Explore the IFC's 25 chapters
            </p>
          </motion.header>

          {loading ? (
            <p className="chapters-page__loading">Loading chapters…</p>
          ) : (
            <ul className="chapters-list">
              {chapters.map((name, i) => (
                <motion.li
                  key={name}
                  className="chapters-list__item"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.02, 0.4) }}
                >
                  <Link to={`/chapters/${nameToSlug(name)}`} className="chapters-list__link">
                    <span className="chapters-list__greek">{getGreekForChapter(name)}</span>
                    <span className="chapters-list__sep">—</span>
                    <span className="chapters-list__name">{name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
