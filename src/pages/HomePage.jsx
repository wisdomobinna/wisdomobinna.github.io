import PageLayout from '../components/layout/PageLayout';
import PubEntry from '../components/shared/PubEntry';
import ItemRow from '../components/shared/ItemRow';
import { publications, publicationCategories } from '../data/publications';

export default function HomePage() {
  return (
    <PageLayout title="About me">
      <section id="biography" className="section">
        <h2 className="section-title">Bio</h2>
        <p>
          I am a third-year Computer Science PhD student at{' '}
          <a href="https://cs.georgetown.edu/" target="_blank" rel="noopener noreferrer">
            Georgetown University
          </a>
          , advised by Professor{' '}
          <a href="https://elissaredmiles.com/" target="_blank" rel="noopener noreferrer">
            Elissa Redmiles
          </a>
          .
        </p>
        <p>
          I received my Bachelor&rsquo;s degree from the University of Port
          Harcourt, and my Master&rsquo;s degree from the{' '}
          <a href="https://www.sheffield.ac.uk/" target="_blank" rel="noopener noreferrer">
            University of Sheffield
          </a>
          , in 2020 and 2023 respectively, advised by{' '}
          <a
            href="https://sheffield.ac.uk/ijc/people/academic-staff/ilya-yablokov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ilya Yablokov
          </a>{' '}
          and{' '}
          <a
            href="https://sheffield.ac.uk/ijc/people/academic-staff/bina-ogbebor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bina Ogbebor
          </a>
          .
        </p>
        
        {/* <p>My research interests lie in:</p>
        <ul className="bio-interests">
          
          <li>
            <span className="highlight">Human-AI interaction</span>: studying
            how people use, interpret and interact with AI systems and their outputs.
          </li>

          <li>
            <span className="highlight">Data-driven safety</span>: measuring
            safety problems in the wild through empirical analysis.
          </li>

          <li>
            <span className="highlight">Security</span>: understanding
            decision-making processes in underground technological systems.
          </li>

          
        </ul> */}
        <p className="bio-contact">
          <strong>Email:</strong> wko7(at)georgetown(dot)edu
        </p>
      </section>

      <section id="publications" className="section">
        <p className="section-label">Research</p>
        <h2 className="section-title">Publications</h2>

        {publicationCategories.map((cat) => {
          const items = publications.filter((p) => p.category === cat.key);
          if (items.length === 0) return null;
          return (
            <div key={cat.key}>
              {cat.showTitle && <h3 className="section-subtitle">{cat.title}</h3>}
              {items.map((pub) => (
                <PubEntry
                  key={pub.id}
                  tag={pub.tag}
                  title={pub.title}
                  authors={pub.authors}
                  authorSelf={pub.authorSelf}
                  links={pub.links}
                  aiArtLink={pub.aiArtLink}
                />
              ))}
            </div>
          );
        })}
      </section>

      <section id="education" className="section">
        <p className="section-label">Background</p>
        <h2 className="section-title">Education</h2>
        <ItemRow date="2024 - 2029">
          <strong>Georgetown University</strong>, Washington, DC &mdash; PhD in
          Computer Science
        </ItemRow>
        <ItemRow date="2022 - 2023">
          <strong>University of Sheffield</strong>, United Kingdom &mdash; M.A. in
          Global Journalism
        </ItemRow>
        <ItemRow date="2015 - 2020">
          <strong>University of Port Harcourt</strong>, Nigeria &mdash; B.S. in
          Computer Science
        </ItemRow>
      </section>

      <section id="awards" className="section">
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Awards &amp; Honors</h2>
        <ItemRow date="2025">
          Fellow, United Nations 63rd Graduate Study Program, Geneva, Switzerland
          (top 5% of 1,250 graduate students across 203 countries)
        </ItemRow>
        <ItemRow date="2025">
          Honorary Fellow, Fellowships at Auschwitz for the Study of Professional
          Ethics &mdash; Germany, Poland
        </ItemRow>
        <ItemRow date="2024">Fritz Family Fellowship, USA</ItemRow>
        <ItemRow date="2023">Emerging Leaders Award, Black in AI, USA</ItemRow>
        <ItemRow date="2022">
          Allan and Nesta Ferguson Trust Scholarship, University of Sheffield, United Kingdom (top 1% of 1,000+ applicants)
        </ItemRow>
        <ItemRow date="2022">
          U.S. Department of State, EducationUSA Opportunity Funds Award (top 1%
          of 7,500+ applicants)
        </ItemRow>
        <ItemRow date="2020">
          Best Graduating Student, Department of Computer Science, University of
          Port Harcourt, Nigeria (2019 Class)
        </ItemRow>
      </section>

      <section id="service" className="section">
        <p className="section-label">Community</p>
        <h2 className="section-title">Academic Services</h2>

        <ItemRow date="2022.09 - 2023.05">
          <strong>President</strong>, All African Post Graduate Research Network
          Society, United Kingdom
        </ItemRow>
        <ItemRow date="2022.09 - 2023.05">
          <strong>Student Representative</strong>, National Union of Students
          Conference, United Kingdom
        </ItemRow>
        <ItemRow date="2022.09 - 2023.05">
          <strong>Departmental Representative</strong>, University of Sheffield
        </ItemRow>
      </section>

      <section id="presentations" className="section">
        <p className="section-label">Talks</p>
        <h2 className="section-title">Invited Talks &amp; Workshops</h2>
        <ItemRow date="2026">
          Invited Workshop Organizer &amp; Facilitator, &ldquo;AI &amp; The Future
          of Authorship, Ownership, and Copyright,&rdquo; Georgetown Day School,
          Washington, DC
        </ItemRow>
        <ItemRow date="2026">
          Invited Speaker &amp; Workshop Leader, Diversity Day, National Cathedral
          School, Washington, DC
        </ItemRow>
      </section>

      <section id="teaching" className="section">
        <p className="section-label">Teaching</p>
        <h2 className="section-title">Teaching Experience</h2>
        <ItemRow date="2026.08 - 2026.12">
          <strong>Introduction to Human-Centered Computing</strong>, Georgetown
          University &mdash; Teaching Assistant
        </ItemRow>
      </section>

      <section id="misc" className="section">
        <p className="section-label">Personal</p>
        <h2 className="section-title">Misc</h2>
        <ItemRow date="2004 - now">
          <strong>Rhythmic Soccer Fan.</strong> Proud to have maintained my
          passion for this beautiful sport.
        </ItemRow>
      </section>

      <footer className="footer">
        <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>
      </footer>
    </PageLayout>
  );
}
