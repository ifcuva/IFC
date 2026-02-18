import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="not-found-page">
        <div className="not-found-page__inner">
          <h1 className="not-found-page__title">Page not found</h1>
          <p className="not-found-page__text">
            This page isn’t ready yet or the link may be incorrect.
          </p>
          <Link to="/" className="not-found-page__link">
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
