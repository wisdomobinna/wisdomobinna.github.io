import { useState } from 'react';
import { toBibtex } from '../../data/publications';

export default function PubEntry({ pub }) {
  const { id, tag, year, title, authors, authorSelf, venue, status, award, note, teaser, links = {}, aiArtLink } = pub;
  const [showBib, setShowBib] = useState(false);
  const [copied, setCopied] = useState(false);
  const bibtex = pub.bibtex ? toBibtex(pub) : null;

  const renderAuthors = () => {
    if (!authorSelf || !authors.includes(authorSelf)) return authors;
    const idx = authors.indexOf(authorSelf);
    return (
      <>
        {authors.slice(0, idx)}
        <span className="me">{authorSelf}</span>
        {authors.slice(idx + authorSelf.length)}
      </>
    );
  };

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      setShowBib(true);
    }
  };

  return (
    <article className={`pub-entry${teaser ? ' has-teaser' : ''}`} id={id}>
      <div className="pub-venue">
        <span className="pub-year">{year}</span>
        <span className="pub-tag">{tag}</span>
        {status && <span className="pub-status">{status}</span>}
      </div>
      <div className="pub-details">
        <h3 className="pub-title">{title}</h3>
        <p className="pub-authors">{renderAuthors()}</p>
        {venue && <p className="pub-where">{venue}</p>}
        {note && <p className="pub-note">{note}</p>}
        {award && (
          <p className="pub-award">
            <i className="fas fa-award" aria-hidden="true" /> {award}
          </p>
        )}
        <div className="pub-links">
          {links.paper && (
            <a href={links.paper} target="_blank" rel="noopener noreferrer">
              Paper <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {links.doi && (
            <a href={links.doi} target="_blank" rel="noopener noreferrer">
              DOI <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {links.pdf && (
            <a href={links.pdf} target="_blank" rel="noopener noreferrer">
              PDF <span aria-hidden="true">&darr;</span>
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer">
              Code <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {aiArtLink && (
            <a href={aiArtLink} target="_blank" rel="noopener noreferrer">
              Exhibition <span aria-hidden="true">&#8599;</span>
            </a>
          )}
          {bibtex && (
            <>
              <button
                type="button"
                onClick={() => setShowBib((v) => !v)}
                aria-expanded={showBib}
                aria-controls={`${id}-bib`}
              >
                BibTeX
              </button>
              <button type="button" onClick={copyBibtex}>
                {copied ? 'Copied ✓' : 'Copy citation'}
              </button>
            </>
          )}
        </div>
        {bibtex && showBib && (
          <pre className="pub-bibtex" id={`${id}-bib`}>
            <code>{bibtex}</code>
          </pre>
        )}
      </div>
      {teaser && (
        <a
          className="pub-teaser"
          href={links.paper || links.pdf}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
        >
          <img src={teaser.src} alt={teaser.alt} loading="lazy" />
        </a>
      )}
    </article>
  );
}
