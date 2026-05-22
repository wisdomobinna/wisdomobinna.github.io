import PageLayout from '../components/layout/PageLayout';
import ArchiveSingle from '../components/shared/ArchiveSingle';
import { publications, publicationCategories } from '../data/publications';

export default function HomePage() {
  return (
    <PageLayout title="About me">
      <div className="page-content">
        <h2 style={{ marginTop: 0 }}>About Me</h2>
        <p>
          I am a Computer Science Ph.D. student at Georgetown University, where I work with{' '}
          <a href="https://elissaredmiles.com/" target="_blank" rel="noopener noreferrer">
            Professor Elissa Redmiles
          </a>{' '}
          on topics that intersect safety, security, and artificial intelligence. My research
          interests are broadly in the security and trustworthiness of online systems. I combine
          computational and data science methods to tackle these challenges and develop intelligent
          tools to support these processes.
        </p>

        <p>
          Before Georgetown, I completed a Master&rsquo;s at the University of Sheffield in the
          United Kingdom, advised by Ilya Yablokov and Bina Ogbebor. My undergraduate degree was
          in computer science with a focus on security and trust in online systems. Through my
          research, I have been invited to the United Nations and several other organizations to
          design technological solutions for these challenges. Before graduate school, I previously
          held roles in software engineering and data science across technology, media, and health
          organizations.
        </p>

        <p>
          When I&rsquo;m not doing research, you can find me writing about AI in the Global South
          at{' '}
          <a href="https://humuslabs.com" target="_blank" rel="noopener noreferrer">
            Humus Labs
          </a>
          , writing and chatting at{' '}
          <a href="https://thereadai.com" target="_blank" rel="noopener noreferrer">
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
