export default function ArchiveSingle({
  title,
  authors,
  authorSelf,
  venue,
  links = {},
  aiArtLink,
}) {
  const renderAuthors = () => {
    if (!authors) return null;
    if (!authorSelf || !authors.includes(authorSelf)) {
      return <>{authors}</>;
    }
    const idx = authors.indexOf(authorSelf);
    return (
      <>
        {authors.slice(0, idx)}
        <span className="archive-single__author-self">{authorSelf}</span>
        {authors.slice(idx + authorSelf.length)}
      </>
    );
  };

  const hasLinks = links.paper || links.url || links.pdf || links.poster;

  return (
    <article className="archive-single">
      <p className="archive-single__title">{title}</p>
      {authors && (
        <p className="archive-single__authors">{renderAuthors()}</p>
      )}
      <p className="archive-single__venue">
        {venue}
        {hasLinks && (
          <span className="archive-single__pub-links">
            {links.paper && (
              <a href={links.paper} target="_blank" rel="noopener noreferrer">
                [Paper]
              </a>
            )}
            {links.url && (
              <a href={links.url} target="_blank" rel="noopener noreferrer">
                [URL]
              </a>
            )}
            {links.pdf && (
              <a href={links.pdf} target="_blank" rel="noopener noreferrer">
                [PDF]
              </a>
            )}
            {links.poster && (
              <a href={links.poster} target="_blank" rel="noopener noreferrer">
                [Poster]
              </a>
            )}
          </span>
        )}
      </p>
      {aiArtLink && (
        <p className="archive-single__ai-art-link">
          <a href={aiArtLink} target="_blank" rel="noopener noreferrer">
            Georgetown AI Art Competition &amp; Exhibition
          </a>
        </p>
      )}
    </article>
  );
}
