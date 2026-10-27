import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import ItemRow from '../components/shared/ItemRow';
import SectionHead from '../components/shared/SectionHead';
import { education, awards, experience } from '../data/profile';

export default function JourneyPage() {
  return (
    <PageLayout title="Journey">
      <PageIntro
        title="Journey"
        lines={['Port Harcourt, Sheffield,', 'Geneva, Washington.', 'Every stop asked a different question.']}
        gloss={[{ word: 'Njem', meaning: 'journey', note: 'the road, and what it makes of you' }]}
      />

      <section className="section">
        <SectionHead label="Schools" title="Education" />
        <ul className="item-list">
          {education.map((e) => (
            <ItemRow key={e.place} date={e.date}>
              <strong>{e.place}</strong>, {e.where}
              <br />
              {e.degree}
              <span className="item-note">{e.note}</span>
            </ItemRow>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionHead label="Roles" title="Experience" />
        <ul className="item-list">
          {experience.map((e) => (
            <ItemRow key={e.role + e.org} date={e.date}>
              <strong>{e.role}</strong>, {e.org}
              {e.note && <span className="item-note">{e.note}</span>}
            </ItemRow>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionHead label="Recognition" title="Fellowships &amp; awards" />
        <ul className="item-list">
          {awards.map((a) => (
            <ItemRow key={a.text} date={a.date}>
              {a.text}
            </ItemRow>
          ))}
        </ul>
      </section>

      <p className="page-coda">
        The full record is in my <Link to="/cv/">CV</Link>.
      </p>
    </PageLayout>
  );
}
