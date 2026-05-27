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
          on topics intersecting safety, security, and society. My research broadly focuses how
          online content, including AI-involved and user-generated media, shapes digital safety, public
          discourse, and trust. I combine computational and social science methods to understand these
          challenges and build intelligent tools that help address them.
          Before Georgetown, I earned a master's degree from{' '}
          <a href="https://www.sheffield.ac.uk/" target="_blank" rel="noopener noreferrer">
            University of Sheffield
          </a>{' '}
          in the United Kingdom, advised by{' '}
          <a href="https://sheffield.ac.uk/ijc/people/academic-staff/ilya-yablokov" target="_blank" rel="noopener noreferrer">
            Ilya Yablokov
          </a>{' '}
          and{' '}
          <a href="https://sheffield.ac.uk/ijc/people/academic-staff/bina-ogbebor" target="_blank" rel="noopener noreferrer">
            Bina Ogbebor
          </a>. I previously held roles in software engineering and
          data science across technology, media, and health organizations.
        </p>

        <p>
          When I&rsquo;m not doing research, you can find me writing about AI in the majority world
          at{' '}
          <a href="https://humuslabs.com" target="_blank" rel="noopener noreferrer">
            Humus Labs
          </a>
          , and other developments in AI at {' '}<a href="thereadai.com" target="_blank" rel="noopener noreferrer">
            TheReadAI.com
          </a>
          . I also contribute to open-source projects like{' '}
          <a href="https://cefini.com" target="_blank" rel="noopener noreferrer">
            cefini.com
          </a>
        </p>

        {/* <h2>Publications</h2> */}
{/* 
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
        })} */}
      </div>
    </PageLayout>
  );
}
