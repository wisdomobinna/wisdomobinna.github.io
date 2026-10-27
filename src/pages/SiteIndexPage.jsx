import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SectionHead from '../components/shared/SectionHead';
import { mainNav } from '../data/navigation';
import { publications } from '../data/publications';
import { writing } from '../data/writing';

export default function SiteIndexPage() {
  return (
    <PageLayout title="Site index">
      <header className="page-head">
        <h1 className="page-title">Site index</h1>
      </header>

      <section className="section">
        <SectionHead title="Sections" />
        <ul className="index-list">
          {mainNav.map((item) => (
            <li key={item.url}>
              <Link to={item.url}>{item.title}</Link> <span lang="ig">{item.igbo}</span>
            </li>
          ))}
          <li>
            <Link to="/cv/">CV</Link>
          </li>
        </ul>
      </section>

      <section className="section">
        <SectionHead title="Papers" />
        <ul className="index-list">
          {publications.map((p) => (
            <li key={p.id}>
              <Link to={`/work/#${p.id}`}>{p.title}</Link> <span>({p.year})</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionHead title="Writing" />
        <ul className="index-list">
          {writing.map((w) =>
            w.body ? (
              <li key={w.slug}>
                <Link to={`/writing/${w.slug}/`}>{w.title}</Link>
              </li>
            ) : (
              <li key={w.slug}>
                <a href={w.url} target="_blank" rel="noopener noreferrer">
                  {w.title}
                </a>{' '}
                <span>(Medium)</span>
              </li>
            )
          )}
        </ul>
      </section>
    </PageLayout>
  );
}
