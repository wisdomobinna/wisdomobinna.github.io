import PageLayout from '../components/layout/PageLayout';
import ArchiveSingle from '../components/shared/ArchiveSingle';
import {
  publications,
  publicationCategories,
} from '../data/publications';

export default function PublicationsPage() {
  return (
    <PageLayout title="Publications">
      <h1 className="page-title">Publications</h1>
      {publicationCategories.map((cat) => {
        const items = publications.filter((p) => p.category === cat.key);
        if (items.length === 0) return null;
        return (
          <section key={cat.key} className="taxonomy-section">
            <h2 className="taxonomy-section__title">{cat.title}</h2>
            {items.map((pub) => (
              <ArchiveSingle
                key={pub.id}
                title={pub.title}
                excerpt={pub.excerpt}
                date={pub.date}
                paperUrl={pub.paperUrl}
                citation={pub.citation}
              />
            ))}
          </section>
        );
      })}
    </PageLayout>
  );
}
