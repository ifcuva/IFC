import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PresidentQuote from './components/PresidentQuote';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="home-content">
          <PresidentQuote />
          <WelcomeSection />
        </section>
        <Footer />
      </main>
    </>
  );
}
