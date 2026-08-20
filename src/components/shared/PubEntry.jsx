export default function PubEntry({ tag, title, authors, authorSelf, links = {}, aiArtLink }) {
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

  const hasLinks = links.paper || links.url || links.pdf || links.poster;

  return (
    <div className="pub-entry">
      <div className="pub-venue">[{tag}]</div>
      <div className="pub-details">
        <div className="pub-title">{title}</div>
        <div className="pub-authors">{renderAuthors()}</div>
        {(hasLinks || aiArtLink) && (
          <div className="pub-links">
            {links.paper && (
              <a href={links.paper} target="_blank" rel="noopener noreferrer">
                Paper
              </a>
            )}
            {links.url && (
              <a href={links.url} target="_blank" rel="noopener noreferrer">
                URL
              </a>
            )}
            {links.pdf && (
              <a href={links.pdf} target="_blank" rel="noopener noreferrer">
                PDF
              </a>
            )}
            {links.poster && (
              <a href={links.poster} target="_blank" rel="noopener noreferrer">
                Poster
              </a>
            )}
            {aiArtLink && (
              <a href={aiArtLink} target="_blank" rel="noopener noreferrer">
                Georgetown AI Art Competition &amp; Exhibition
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
