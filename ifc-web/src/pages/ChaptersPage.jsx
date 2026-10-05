import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <header className="chapters-page__hero">
          <div className="chapters-page__hero-inner">
            <h1 className="chapters-page__title">Our Chapters</h1>
            <p className="chapters-page__intro">
              Explore the IFC's 27 chapters
            </p>
          </div>
        </header>

        <section className="chapters-page__directory" aria-label="IFC chapter directory">
          <div className="chapters-page__inner">
            {loading ? (
              <p className="chapters-page__loading">Loading chapters…</p>
            ) : (
              <ul className="chapters-list">
                {chapters.map((name) => {
                  const greek = getGreekForChapter(name);
                  const hasGreekName = greek !== name;
                  return (
                    <li key={name} className="chapters-list__item">
                      <Link to={`/chapters/${nameToSlug(name)}`} className="chapters-list__link">
                        <span className="chapters-list__greek" aria-hidden={!hasGreekName}>
                          {hasGreekName ? greek : ''}
                        </span>
                        <span className="chapters-list__sep" aria-hidden="true">
                          {hasGreekName ? '—' : ''}
                        </span>
                        <span className="chapters-list__name">{name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
