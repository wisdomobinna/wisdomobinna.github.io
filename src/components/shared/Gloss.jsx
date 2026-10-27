// A word, what it means, and a short note: the site's recurring motif.
export default function Gloss({ items, className = '' }) {
  return (
    <dl className={`gloss ${className}`.trim()}>
      {items.map((g) => (
        <div key={g.word} className="gloss-item">
          <dt lang={g.lang || 'ig'}>{g.word}</dt>
          <dd>
            <span className="gloss-meaning">{g.meaning}</span>
            {g.note && <span className="gloss-note">{g.note}</span>}
          </dd>
        </div>
      ))}
    </dl>
  );
}
