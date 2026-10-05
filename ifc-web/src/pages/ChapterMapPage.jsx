import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { chapterMapLocations } from '../data/chapterMap';
import { nameToSlug } from '../utils/slugs';
import './ChapterMapPage.css';

function getTooltipClasses(location) {
  const classes = ['chapter-map__tooltip'];
  if (location.y < 38) classes.push('chapter-map__tooltip--below');
  if (location.x < 16) classes.push('chapter-map__tooltip--left');
  if (location.x > 70) classes.push('chapter-map__tooltip--right');
  return classes.join(' ');
}

export default function ChapterMapPage() {
  const [activeChapter, setActiveChapter] = useState(null);

  const handleMarkerClick = (event, chapterName) => {
    if (window.matchMedia('(hover: none)').matches && activeChapter !== chapterName) {
      event.preventDefault();
      setActiveChapter(chapterName);
    }
  };

  return (
    <>
      <Navbar />
      <main className="chapter-map-page">
        <div className="chapter-map-page__inner">
          <Motion.header
            className="chapter-map-page__header"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1>Chapter Map</h1>
          </Motion.header>

          <Motion.section
            className="chapter-map"
            aria-label="Interactive map of IFC chapter houses"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="chapter-map__toolbar">
              <span className="chapter-map__hint">
                <span className="chapter-map__hint-desktop">
                  Hover over a house to see chapter details
                </span>
                <span className="chapter-map__hint-mobile">Scroll the map, then tap a house</span>
              </span>
            </div>

            <div className="chapter-map__scroll">
              <div className="chapter-map__canvas">
                <img
                  src="/images/chapter_map.png"
                  alt="Street map of UVA IFC chapter houses near Rugby Road"
                  className="chapter-map__image"
                  width="1024"
                  height="576"
                />

                {chapterMapLocations.map((location) => {
                  const isActive = activeChapter === location.name;
                  return (
                    <Link
                      key={location.name}
                      to={`/chapters/${nameToSlug(location.name)}`}
                      className={`chapter-map__marker${isActive ? ' chapter-map__marker--active' : ''}`}
                      style={{ left: `${location.x}%`, top: `${location.y}%` }}
                      aria-label={`${location.name}, ${location.address}. View chapter`}
                      onClick={(event) => handleMarkerClick(event, location.name)}
                      onFocus={() => setActiveChapter(location.name)}
                      onBlur={() => setActiveChapter(null)}
                    >
                      <span className={getTooltipClasses(location)}>
                        {location.symbol && (
                          <span className="chapter-map__tooltip-symbol">{location.symbol}</span>
                        )}
                        <span className="chapter-map__tooltip-copy">
                          <strong>{location.name}</strong>
                          <span>{location.address}</span>
                          <span className="chapter-map__tooltip-link">View chapter →</span>
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
