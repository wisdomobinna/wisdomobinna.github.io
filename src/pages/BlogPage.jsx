import PageLayout from '../components/layout/PageLayout';
import ArchiveSingle from '../components/shared/ArchiveSingle';
import { posts } from '../data/posts';

export default function BlogPage() {
  // Group posts by year
  const grouped = posts.reduce((acc, post) => {
    const year = new Date(post.date + 'T00:00:00').getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => b - a);

  return (
    <PageLayout title="Blog">
      <h1 className="page-title">Blog Posts</h1>
      {years.map((year) => (
        <section key={year} className="taxonomy-section">
          <h2 className="taxonomy-section__title">{year}</h2>
          {grouped[year].map((post) => (
            <ArchiveSingle
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </section>
      ))}
    </PageLayout>
  );
}
