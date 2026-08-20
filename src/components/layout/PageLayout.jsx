import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ThemeToggle from './ThemeToggle';
import BackToTop from './BackToTop';
import Footer from './Footer';

export default function PageLayout({ children, title }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = title ? `${title} - Wisdom Obinna` : 'Wisdom Obinna';
  }, [title]);

  return (
    <>
      <ThemeToggle />
      <BackToTop />
      <main className="container">
        <Sidebar />
        <div className="main-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
