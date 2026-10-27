import { formatNewsDate } from '../../data/news';

export default function NewsList({ items }) {
  return (
    <ol className="news-list">
      {items.map((item) => (
        <li key={item.date + item.html} className="news-item">
          <time className="news-date" dateTime={item.date}>
            {formatNewsDate(item.date)}
          </time>
          <p
            className="news-text"
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </li>
      ))}
    </ol>
  );
}
