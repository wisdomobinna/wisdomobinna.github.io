import PageLayout from '../components/layout/PageLayout';
import ArchiveSingle from '../components/shared/ArchiveSingle';
import { publications, publicationCategories } from '../data/publications';

export default function HomePage() {
  return (
    <PageLayout title="About me">
      <div className="page-content">
        <p>
          I&rsquo;m a Computer Science Ph.D. student at Georgetown University,
          advised by{' '}
          <a href="https://elissaredmiles.com/" target="_blank" rel="noopener noreferrer">
            Prof. Elissa Redmiles
          </a>{' '}
          in the{' '}
          <a href="https://seclab.cs.georgetown.edu/" target="_blank" rel="noopener noreferrer">
            CS Security Lab
          </a>
          .
        </p>

        <p>
          My work is centered on the safety and security of intelligent systems. I care about how
          these technologies are built, how they impact society, and how we can build better systems
          that are more useful and safe. In the past, I have been invited to the United Nations and
          several other multinational and regional organisations to discuss the impacts of technology
          on society and implement solutions to make people safe online and at work.
        </p>

        <p>
          When I&rsquo;m not doing research, I write about AI in the Global South at{' '}
          <a href="https://humuslabs.com" target="_blank" rel="noopener noreferrer">
            Humus Labs
          </a>{' '}
          and contribute to building{' '}
          <a href="https://cefini.com" target="_blank" rel="noopener noreferrer">
            Cefini.com
          </a>
          , an AI-powered search engine.
        </p>

        <h2>Publications</h2>

        {publicationCategories.filter((cat) => cat.key !== 'conferences').map((cat) => {
          const items = publications.filter((p) => p.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key} className="taxonomy-section">
              <h3 className="taxonomy-section__title">{cat.title}</h3>
              {items.map((pub) => (
                <ArchiveSingle
                  key={pub.id}
                  title={pub.title}
                  authors={pub.authors}
                  authorSelf={pub.authorSelf}
                  venue={pub.venue}
                  links={pub.links}
                  aiArtLink={pub.aiArtLink}
                />
              ))}
            </section>
          );
        })}
      </div>
    </PageLayout>
  );
}
