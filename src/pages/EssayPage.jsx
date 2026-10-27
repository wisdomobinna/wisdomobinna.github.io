import { Link, useParams } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import NotFoundPage from './NotFoundPage';
import { author } from '../data/siteConfig';
import { writing } from '../data/writing';
import { formatNewsDate } from '../data/news';

export default function EssayPage() {
  const { slug } = useParams();
  const essay = writing.find((w) => w.slug === slug && w.body);
  if (!essay) return <NotFoundPage />;

  return (
    <PageLayout title={essay.title}>
      <article className="essay">
        <header className="essay-head">
          <Link to="/writing/" className="back-link">
            <span aria-hidden="true">&larr;</span> Writing
          </Link>
          <h1 className="essay-title">{essay.title}</h1>
          {essay.subtitle && <p className="essay-subtitle">{essay.subtitle}</p>}
          <p className="essay-meta">
            {author.name} &middot; {formatNewsDate(essay.date)}
            {essay.readTime && <> &middot; {essay.readTime}</>}
          </p>
        </header>
        <div className="essay-body" dangerouslySetInnerHTML={{ __html: essay.body }} />
      </article>
    </PageLayout>
  );
}
