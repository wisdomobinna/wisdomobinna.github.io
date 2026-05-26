import PageLayout from '../components/layout/PageLayout';
import ArchiveSingle from '../components/shared/ArchiveSingle';
import { publications, publicationCategories } from '../data/publications';

export default function HomePage() {
  return (
    <PageLayout title="About me">
      <div className="page-content">
        <h2 style={{ marginTop: 0 }}>About Me</h2>
        <p>
          I am a Computer Science Ph.D. student at{' '}
          <a href="https://cs.georgetown.edu/" target="_blank" rel="noopener noreferrer">
            Georgetown University
          </a>
          , where I work with{' '}
          <a href="https://elissaredmiles.com/" target="_blank" rel="noopener noreferrer">
            Professor Elissa Redmiles
          </a>{' '}
          on problems at the intersection of safety, security, and society. My research examines how
          online content, including AI-generated and user-generated media, shapes digital safety, public
          discourse, and trust. I combine computational and social science methods to understand these
          challenges and build intelligent tools that help address them.
        </p>

        <p>
          When I&rsquo;m not doing research, you can find me writing about AI in the Global South
          at{' '}
          <a href="https://humuslabs.com" target="_blank" rel="noopener noreferrer">
            Humus Labs
          </a>
          , writing and chatting at{' '}
          <a href="https://www.youtube.com/@Thereadai" target="_blank" rel="noopener noreferrer">
            ReadAI
          </a>{' '}
          and
          {' '}<a href="thereadai.com" target="_blank" rel="noopener noreferrer">
            TheReadAI.com
          </a>
          , and volunteering with friends to build a discovery platform for AI tools at{' '}
          <a href="https://cefini.com" target="_blank" rel="noopener noreferrer">
            Cefini.com
          </a>
          .
        </p>

        <h2>Publications</h2>

        {publicationCategories.map((cat) => {
          const items = publications.filter((p) => p.category === cat.key);
          if (items.length === 0) return null;
          return (
            <section key={cat.key} className="taxonomy-section">
              {cat.showTitle && <h3 className="taxonomy-section__title">{cat.title}</h3>}
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
