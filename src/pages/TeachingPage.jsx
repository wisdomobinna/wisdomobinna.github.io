import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import ItemRow from '../components/shared/ItemRow';
import SectionHead from '../components/shared/SectionHead';
import { talks, teaching, service } from '../data/profile';

function Rows({ items }) {
  return (
    <ul className="item-list">
      {items.map((t) => (
        <ItemRow key={t.text} date={t.date}>
          {t.text}
        </ItemRow>
      ))}
    </ul>
  );
}

export default function TeachingPage() {
  return (
    <PageLayout title="Teaching">
      <PageIntro
        title="Teaching"
        lines={['The surest way to learn a thing', 'is to hand it to someone else.']}
        gloss={[{ word: 'Nkuzi', meaning: 'teaching', note: 'what passes from one hand to the next' }]}
      />

      <section className="section">
        <SectionHead label="Classroom" title="Teaching" />
        <Rows items={teaching} />
      </section>

      <section className="section">
        <SectionHead label="Talks" title="Invited talks &amp; workshops" />
        <Rows items={talks} />
      </section>

      <section className="section">
        <SectionHead label="Community" title="Service &amp; mentoring" />
        <Rows items={service} />
      </section>
    </PageLayout>
  );
}
