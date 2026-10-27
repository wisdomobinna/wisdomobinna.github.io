import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dock from './Dock';
import BackToTop from './BackToTop';
import Footer from './Footer';

export default function PageLayout({ children, title, home = false }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  useEffect(() => {
    document.title = title ? `${title} · Wisdom Obinna` : 'Wisdom Obinna';
  }, [title]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Dock home={home} />
      <main id="main" className={home ? 'landing' : 'page'}>
        {children}
      </main>
      {!home && <Footer />}
      {!home && <BackToTop />}
    </>
  );
}
