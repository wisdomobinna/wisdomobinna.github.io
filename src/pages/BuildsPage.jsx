import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import { builds } from '../data/builds';

function BuildLink({ url, children }) {
  if (!url) return children;
  if (url.startsWith('/')) return <Link to={url}>{children}</Link>;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function BuildsPage() {
  return (
    <PageLayout title="Builds">
      <PageIntro
        title="Builds"
        lines={['I learned to build', 'before I learned to ask why.', 'Now I build to ask.']}
        gloss={[{ word: 'Ngwa', meaning: 'tool', note: 'a thing made to be used' }]}
      />

      <ol className="build-list">
        {builds.map((b) => (
          <li key={b.name} className="build">
            <span className="build-years">{b.years}</span>
            <div>
              <h2 className="build-name">
                <BuildLink url={b.url}>
                  {b.name}
                  {b.url && <span aria-hidden="true"> {b.url.startsWith('/') ? '→' : '↗'}</span>}
                </BuildLink>
              </h2>
              <p className="build-stack">{b.stack}</p>
              <p className="build-body">{b.body}</p>
              {b.image && (
                <img className="build-image" src={b.image.src} alt={b.image.alt} loading="lazy" />
              )}
            </div>
          </li>
        ))}
      </ol>

      <p className="page-coda">
        A curated list of things I&rsquo;ve made outside of papers. More on{' '}
        <a href="https://github.com/wisdomobinna" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>
    </PageLayout>
  );
}
