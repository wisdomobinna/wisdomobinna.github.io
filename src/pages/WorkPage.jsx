import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PubEntry from '../components/shared/PubEntry';
import NewsList from '../components/shared/NewsList';
import SectionHead from '../components/shared/SectionHead';
import SocialLinks from '../components/shared/SocialLinks';
import { author } from '../data/siteConfig';
import { publications, publicationCategories } from '../data/publications';
import { news, splitNews } from '../data/news';
import { threads } from '../data/profile';
import useScrollFade from '../hooks/useScrollFade';

export default function WorkPage() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  const { upcoming, past } = splitNews(news);
  const pubById = Object.fromEntries(publications.map((p) => [p.id, p]));
  const pageRef = useRef(null);
  useScrollFade(pageRef, '.pub-entry, .thread, .news-item, .bio-text p');

  return (
    <PageLayout title="Work">
      <div ref={pageRef}>
        <section className="bio" aria-label="About me">
          <div className="bio-portrait">
            <img src={author.avatar} alt="Portrait of Wisdom Obinna" width="1024" height="1024" />
          </div>
          <h2 className="bio-name">{author.name}</h2>
          <SocialLinks links={author.links} />
          <div className="bio-text prose">
            <p>
              I&rsquo;m a third-year Computer Science PhD student at{' '}
              <a href="https://cs.georgetown.edu/" target="_blank" rel="noopener noreferrer">
                Georgetown University
              </a>
              , advised by Professor{' '}
              <a href={author.advisor.url} target="_blank" rel="noopener noreferrer">
                Elissa Redmiles
              </a>
              . I work in usable security, privacy, and human-centered AI.
            </p>
            <p>
              My work broadly focuses on human-AI interaction. I develop systems to
              evaluate how AI changes the way people create, judge, and value work
              made with AI. I also study how to align generative AI systems with
              people&rsquo;s intent to better meet their expectations, beginning
              with the ethics of the data they are built on. I am cautiously
              optimistic about the future, and want to contribute to technology
              that supports human well-being and purpose.
            </p>
          </div>
        </section>

        <section id="threads" className="section">
          <SectionHead label="Research" title="Three threads" />
          <ol className="threads">
            {threads.map((t, i) => (
              <li key={t.key} className="thread">
                <span className="thread-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="thread-title">{t.title}</h3>
                <p>{t.body}</p>
                <p className="thread-links">
                  {(t.pubs || []).map((id) => (
                    <a key={id} href={`#${id}`}>
                      {pubById[id].tag} <span aria-hidden="true">&darr;</span>
                    </a>
                  ))}
                  {t.link && (
                    <Link to={t.link.url}>
                      {t.link.label} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="publications" className="section">
          <SectionHead label="Papers" title="Publications" />
          {years.map((year) => (
            <div key={year} className="year-group">
              {publications
                .filter((p) => p.year === year)
                .map((pub) => (
                  <div key={pub.id}>
                    {pub.category !== 'conferences' && (
                      <p className="pub-kind">
                        {publicationCategories.find((c) => c.key === pub.category).title}
                      </p>
                    )}
                    <PubEntry pub={pub} />
                  </div>
                ))}
            </div>
          ))}
        </section>

        <section id="news" className="section">
          <SectionHead label="Lately" title="News &amp; attending" />
          {upcoming.length > 0 && (
            <>
              <h3 className="year-label">Upcoming</h3>
              <NewsList items={upcoming} />
            </>
          )}
          <h3 className="year-label">Past</h3>
          <NewsList items={past} />
        </section>

        <section className="section contact-coda">
          <p>
            You can find me on{' '}
            <a href="https://www.linkedin.com/in/wisdom-obinna/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            ,
            <br />
            or let&rsquo;s share a coffee, write me
            <br />
            wko7 [at] georgetown [dot] edu
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
