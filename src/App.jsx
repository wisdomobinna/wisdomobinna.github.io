import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import BuildsPage from './pages/BuildsPage';
import ArtPage from './pages/ArtPage';
import WritingPage from './pages/WritingPage';
import EssayPage from './pages/EssayPage';
import TeachingPage from './pages/TeachingPage';
import JourneyPage from './pages/JourneyPage';
import MiscPage from './pages/MiscPage';
import CvPage from './pages/CvPage';
import SiteIndexPage from './pages/SiteIndexPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/" element={<WorkPage />} />
        <Route path="/builds/" element={<BuildsPage />} />
        <Route path="/art/" element={<ArtPage />} />
        <Route path="/writing/" element={<WritingPage />} />
        <Route path="/writing/:slug/" element={<EssayPage />} />
        <Route path="/teaching/" element={<TeachingPage />} />
        <Route path="/journey/" element={<JourneyPage />} />
        <Route path="/misc/" element={<MiscPage />} />
        <Route path="/cv/" element={<CvPage />} />
        <Route path="/site-index/" element={<SiteIndexPage />} />
        {/* Old addresses */}
        <Route path="/research/" element={<Navigate to="/work/" replace />} />
        <Route path="/publications/" element={<Navigate to="/work/#publications" replace />} />
        <Route path="/news/" element={<Navigate to="/work/#news" replace />} />
        <Route path="/aiart/" element={<Navigate to="/art/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
