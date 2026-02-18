import { useState, useRef, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PresidentQuote from '../components/PresidentQuote';
import MissionSection from '../components/MissionSection';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';
import '../App.css';

import { smoothScrollTo } from '../utils/smoothScroll';

export default function HomePage() {
  const [presidentLetterOpen, setPresidentLetterOpen] = useState(false);
  const letterRef = useRef(null);

  const openLetter = useCallback(() => {
    setPresidentLetterOpen(true);
    setTimeout(() => {
      smoothScrollTo(letterRef.current, 1800);
    }, 650);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="home-content">
          <PresidentQuote onReadStatement={openLetter} />
          <MissionSection />
          <WelcomeSection
            isOpen={presidentLetterOpen}
            onClose={() => setPresidentLetterOpen(false)}
            letterRef={letterRef}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
