import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import { writing } from '../data/writing';
import { formatNewsDate } from '../data/news';

export default function WritingPage() {
  return (
    <PageLayout title="Writing">
      <PageIntro
        title="Writing"
        lines={['Before I studied systems,', 'I reported on them.']}
        gloss={[{ word: 'Ederede', meaning: 'writing', note: 'what stays after the voice is gone' }]}
      />

      <ol className="writing-list">
        {writing.map((w) => {
          const external = !w.body;
          const inner = (
            <>
              <span className="writing-meta">
                {formatNewsDate(w.date)} &middot; {w.kind}
                {external && ' · Medium'}
              </span>
              <span className="writing-title">
                {w.title}
                {external && <span aria-hidden="true"> &#8599;</span>}
              </span>
              <span className="writing-summary">{w.summary}</span>
            </>
          );
          return (
            <li key={w.slug}>
              {external ? (
                <a className="writing-item" href={w.url} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link className="writing-item" to={`/writing/${w.slug}/`}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </PageLayout>
  );
}
