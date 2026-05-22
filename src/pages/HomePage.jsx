import PageLayout from '../components/layout/PageLayout';

export default function HomePage() {
  return (
    <PageLayout title="Hello!">
      <h1 className="page-title">Hello!</h1>
      <div className="page-content">
        <p>
          I'm a Computer Science Ph.D. student at Georgetown University,
          advised by{' '}
          <a
            href="https://elissaredmiles.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prof. Elissa Redmiles
          </a>{' '}
          in the{' '}
          <a
            href="https://seclab.cs.georgetown.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CS Security Lab.
          </a>
        </p>

        <p>
          My work is centered on the safety and security of intelligent systems. I care about how
          these technologies are built, how it impacts society, and how we can build better systems
          that are more useful and safe. In the past, I have been invited to the United Nations and
          several other multinational and regional organisations to discuss the impacts of technology
          on society and implement solutions to make people safe online and at work.
        </p>

        <p>
          Outside of research, I write about AI in the Global South at{' '}
          <a href="https://humuslabs.com" target="_blank" rel="noopener noreferrer">
            Humus Labs
          </a>
          , and I contribute to building{' '}
          <a href="https://cefini.com" target="_blank" rel="noopener noreferrer">
            Cefini.com
          </a>
          , an AI-powered search engine. I also talk about AI on{' '}
          <a href="https://www.youtube.com/@cefiniHQ" target="_blank" rel="noopener noreferrer">
            their YouTube channel
          </a>{' '}
          — check them out!
        </p>

        {/* <h2>Updates</h2>

        <h3>2025</h3>
        <ul>
          <li>
            Our Georgetown AI-involved Art just got featured at{' '}
            <a
              href="https://cs.georgetown.edu/news-story/ai-in-art-at-2025-techprom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Center for Democracy and Technology, Washington DC!
            </a>
          </li>
          <li>
            I was amongst 41 graduate fellows to take part in the United Nations Graduate Study
            Fellowship program in Geneva, Switzerland{' '}
            <a
              href="https://www.ungeneva.org/sites/default/files/2025-07/2025%20GSP%20Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              (I contributed to the report on global governance of emerging technologies)
            </a>
          </li>
          <li>
            I was among 12 Design and Technology Fellows at the Fellowships at Auschwitz for the
            Study of Professional Ethics in Germany &amp; Poland
          </li>
          <li>
            I presented our AI art study at the AI and copyright presentation at Data and Society
            Workshop, New York
          </li>
          <li>
            <a
              href="https://tes.georgetown.edu/announcements/prof-elissa-redmiles-co-organizes-juried-ai-art-competition-with-georgetown-art-computer-science-law/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Art Competition &amp; Exhibition
            </a>{' '}
            (April)
          </li>
        </ul>

        <h3>2024</h3>
        <ul>
          <li>
            Joined Responsible AI Network — work on{' '}
            <a
              href="https://georgetownsecuritystudiesreview.org/2024/11/04/the-2024-national-security-memorandum-on-ai-a-timeline-and-index-of-responsibilities/"
              target="_blank"
              rel="noopener noreferrer"
            >
              2024 US National Security Memorandum on AI
            </a>
          </li>
          <li>
            Fritz Research Fellow at{' '}
            <a
              href="https://techandsociety.georgetown.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Technology and Society Initiative
            </a>{' '}
            &amp;{' '}
            <a
              href="https://mdi.georgetown.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Massive Data Institute
            </a>
          </li>
          <li>
            Started Computer Science PhD at Georgetown University with{' '}
            <a
              href="https://elissaredmiles.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dr. Elissa Redmiles
            </a>
          </li>
          <li>NHS Barnsley position (April)</li>
          <li>
            Teaching Python for Data Science at All-African Post-graduate Research Society
            (Mar–July)
          </li>
          <li>
            Research Assistant at Media and Journalism School, University of Sheffield
          </li>
        </ul> */}
      </div>
    </PageLayout>
  );
}
