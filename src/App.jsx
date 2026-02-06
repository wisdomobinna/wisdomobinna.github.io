import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import AiArtPage from './pages/AiArtPage';
import CvPage from './pages/CvPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications/" element={<PublicationsPage />} />
        <Route path="/aiart/" element={<AiArtPage />} />
        <Route path="/cv/" element={<CvPage />} />
        <Route path="/year-archive/" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
