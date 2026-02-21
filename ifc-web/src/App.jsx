import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChaptersPage from './pages/ChaptersPage';
import ChapterPage from './pages/ChapterPage';
import RecruitmentPage from './pages/RecruitmentPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/chapters/:slug" element={<ChapterPage />} />
      <Route path="/recruitment" element={<RecruitmentPage />} />
      <Route path="/recruitment/faqs" element={<Navigate to="/recruitment" replace />} />
      <Route path="/recruitment/spring-2026" element={<Navigate to="/recruitment" replace />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
