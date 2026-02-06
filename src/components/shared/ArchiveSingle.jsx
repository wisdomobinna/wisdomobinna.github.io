export default function ArchiveSingle({
  title,
  excerpt,
  date,
  paperUrl,
  citation,
}) {
  const formattedDate = date
    ? new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <article className="archive-single">
      <h2 className="archive-single__title">{title}</h2>
      {formattedDate && (
        <p className="archive-single__meta">{formattedDate}</p>
      )}
      {excerpt && <p className="archive-single__excerpt">{excerpt}</p>}
      {citation && (
        <p className="archive-single__excerpt">
          <em>{citation}</em>
        </p>
      )}
      {paperUrl && (
        <div className="archive-single__links">
          <a href={paperUrl} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-fw fa-file-pdf" /> Paper
          </a>
        </div>
      )}
    </article>
  );
}
