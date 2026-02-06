import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';
import { mainNav } from '../../data/navigation';

export default function Masthead() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <div className="masthead__title">
          <Link to="/">{siteConfig.title}</Link>
        </div>
        <button
          className="masthead__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <nav className={`masthead__nav${menuOpen ? ' is-open' : ''}`}>
          {mainNav.map((item) =>
            item.external ? (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            ) : (
              <Link
                key={item.url}
                to={item.url}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
