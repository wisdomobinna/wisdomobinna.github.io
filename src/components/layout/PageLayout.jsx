import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Masthead from './Masthead';
import Sidebar from './Sidebar';
import AuthorProfile from './AuthorProfile';
import Footer from './Footer';

export default function PageLayout({ children, title }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = title ? `${title} - Wisdom Obinna` : 'Wisdom Obinna';
  }, [title]);

  return (
    <>
      <Masthead />
      <div className="page-wrapper">
        <Sidebar />
        <main className="page-content">
          <div className="author-profile--mobile">
            <AuthorProfile />
          </div>
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
}
