import { useEffect, useRef, useState } from 'react';
import { author } from '../../data/siteConfig';
import { mainNav } from '../../data/navigation';

export default function Sidebar() {
  const [activeId, setActiveId] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const links = Array.from(
      navRef.current?.querySelectorAll('a[href^="/#"]') || []
    );
    const sections = links
      .map((link) => document.getElementById(link.getAttribute('href').slice(2)))
      .filter(Boolean);

    if (!links.length || !sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-18% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    setActiveId(sections[0].id);

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-photo">
          {author.avatar && <img src={author.avatar} alt={author.name} />}
          <div className="social-links">
            {author.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>
        <h1 className="name">{author.name}</h1>
        <p
          className="affiliation"
          dangerouslySetInnerHTML={{ __html: author.bio }}
        />

        {mainNav.length > 0 && (
          <>
            <button
              type="button"
              className="sidebar-nav-toggle"
              onClick={() => setNavOpen((v) => !v)}
              aria-expanded={navOpen}
            >
              Contents
              <i className="chevron fas fa-chevron-down" />
            </button>
            <nav
              className={`sidebar-nav${navOpen ? ' is-open' : ''}`}
              ref={navRef}
            >
              {mainNav.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  onClick={() => setNavOpen(false)}
                  className={activeId && item.url === `/#${activeId}` ? 'active' : undefined}
                  aria-current={activeId && item.url === `/#${activeId}` ? 'true' : undefined}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </>
        )}
      </div>
    </aside>
  );
}
