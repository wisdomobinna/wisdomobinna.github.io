import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import SectionHead from '../components/shared/SectionHead';

export default function MiscPage() {
  return (
    <PageLayout title="Misc">
      <PageIntro
        title="Misc"
        lines={['Not everything', 'has to be a paper.']}
        gloss={[{ word: 'Ihe ọzọ', meaning: 'other things', note: 'everything that doesn’t fit elsewhere' }]}
      />

      <section className="section">
        <SectionHead label="Since 2004" title="Football" />
        <div className="prose">
          <p>
            A rhythmic soccer fan, and proud to have kept my passion for the
            beautiful game. Real Madrid, through and through.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
