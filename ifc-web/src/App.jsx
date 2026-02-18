import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChaptersPage from './pages/ChaptersPage';
import ChapterPage from './pages/ChapterPage';
import RecruitmentFaqPage from './pages/RecruitmentFaqPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/chapters/:slug" element={<ChapterPage />} />
      <Route path="/recruitment/faqs" element={<RecruitmentFaqPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
