import PageLayout from '../components/layout/PageLayout';
import PageIntro from '../components/shared/PageIntro';
import SectionHead from '../components/shared/SectionHead';

export default function ArtPage() {
  return (
    <PageLayout title="Art">
      <PageIntro
        title="Art"
        lines={['Who is the artist', 'when the brush can answer back?']}
        gloss={[{ word: 'Nka', meaning: 'art, skill', note: 'the craft that lives in the hands' }]}
      />

      <section id="ai-art" className="section">
        <SectionHead label="2024 &ndash; now &middot; Research lead" title="Georgetown AI Art Competition &amp; Exhibition" />
        <div className="prose">
          <p>
            An interdisciplinary initiative bringing together art, computer
            science, and law to explore the creative possibilities and ethical
            dimensions of AI-generated art. The exhibition showcases works from
            students and community members who use AI tools in their creative
            process, prompting dialogue about authorship, originality, and the
            role of technology in artistic expression.
          </p>
          <p>
            I designed and deployed the generative AI system entrants used to
            make their work, instrumented to capture iterative creation
            behaviour, prompt revisions, decision timestamps and
            authorship-attribution data. Creator and evaluator surveys asked
            about perceived authorship, creative contribution, copyright
            ownership, and the legal protections people want. A multi-stage
            evaluation with 115 peer jurors and five expert judges selected 12
            featured works.
          </p>
          <p>
            We presented the work at Georgetown&rsquo;s Lauinger Library (April
            2025) and at the Center for Democracy &amp; Technology&rsquo;s Tech
            Prom at The LINE DC (October 2025), contributing evidence to U.S.
            Copyright Office policy discussions. Advised by Elissa Redmiles,
            Kristelia Garcia and Toni-Lee Sangastiano.
          </p>
        </div>
        <p className="cta-row">
          <a className="button" href="https://aiart.georgetown.domains" target="_blank" rel="noopener noreferrer">
            Visit the online exhibition <span aria-hidden="true">&#8599;</span>
          </a>
        </p>
      </section>

      <section id="design" className="section">
        <SectionHead label="Before research" title="Design" />
        <div className="prose">
          <p>
            I came up through design: print and brand work, interfaces, and the
            visual side of data journalism. At Nolela I led design; at TodayFM I
            turned datasets into graphics people would actually stop for.
          </p>
        </div>
        <figure className="art-figure">
          <img
            src="/images/art-nolela-brochure.jpg"
            alt="A printed tri-fold brochure for Nolela, open on a concrete surface"
            loading="lazy"
          />
          <figcaption>Print work for Nolela.</figcaption>
        </figure>
      </section>
    </PageLayout>
  );
}
