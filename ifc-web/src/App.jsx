import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChaptersPage from './pages/ChaptersPage';
import ChapterPage from './pages/ChapterPage';
import RecruitmentPage from './pages/RecruitmentPage';
import IFCJCPage from './pages/IFCJCPage';
import GoverningBoardPage from './pages/GoverningBoardPage';
import PublicReleasesPage from './pages/PublicReleasesPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
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
      <Route path="/ifc-jc" element={<IFCJCPage />} />
      <Route path="/governing-board" element={<GoverningBoardPage />} />
      <Route path="/governing-board/public-releases" element={<PublicReleasesPage />} />
      <Route path="/public-releases" element={<Navigate to="/governing-board/public-releases" replace />} />
      <Route path="/scholarships" element={<ScholarshipsPage />} />
      <Route path="/scholarships/scholarship" element={<Navigate to="/scholarships#scholarship" replace />} />
      <Route path="/scholarships/quentin-alcorn" element={<Navigate to="/scholarships#quentin-alcorn" replace />} />
      <Route path="/scholarships/funding-requests" element={<Navigate to="/scholarships#funding-requests" replace />} />
      <Route path="/ifc-jc/standards-boards" element={<Navigate to="/ifc-jc" replace />} />
      <Route path="/ifc-jc/complaint-form" element={<Navigate to="/ifc-jc" replace />} />
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
