import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PresidentQuote from '../components/PresidentQuote';
import MissionSection from '../components/MissionSection';
import WelcomeSection from '../components/WelcomeSection';
import Footer from '../components/Footer';
import '../App.css';

export default function HomePage() {
  const [presidentLetterOpen, setPresidentLetterOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="home-content">
          <PresidentQuote onReadStatement={() => setPresidentLetterOpen(true)} />
          <MissionSection />
        </section>
        <Footer />
      </main>
      <WelcomeSection
        isOpen={presidentLetterOpen}
        onClose={() => setPresidentLetterOpen(false)}
      />
    </>
  );
}
