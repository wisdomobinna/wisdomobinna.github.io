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
            CS Security Lab
          </a>
          . My research examines how AI systems shape decision-making, creative
          production, and content governance — focusing on the frictions that
          emerge when algorithmic mediation meets human work, the misalignments
          between designers' intentions and users' experiences, and how
          technical interventions succeed or fail at preventing downstream
          harms.
        </p>
        <p>
          I am an affiliate researcher at{' '}
          <a
            href="https://humuslabs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Humus Labs
          </a>
          . I also give talks on AI at{' '}
          <a
            href="https://cefini.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            CEFINI
          </a>{' '}
          (
          <a
            href="https://www.youtube.com/@cefiniai"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          ). Previously, I contributed to the development of the UN's ODET 2026
          report on emerging technologies and served on the United Nations'
          COVID-19 research project. I hold a Master's degree from the
          University of Sheffield and a Bachelor's in Computer Science from the
          University of Port Harcourt.
        </p>

        <h2>Updates</h2>

        <h3>2026</h3>

        <h3>2025</h3>
        <ul>
          <li>
            Georgetown AI Art featured at the Center for Development and
            Technology (Oct)
          </li>
          <li>
            United Nations 63rd Graduate Study Program, Geneva (July)
          </li>
          <li>DNS Resolver Security poster accepted to SOUPS</li>
          <li>
            Design and Technology Fellow, FASPE (Germany &amp; Poland)
          </li>
          <li>
            AI and copyright presentation at Data and Society Workshop, New
            York
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
            Teaching Python for Data Science at All-African Post-graduate
            Research Society (Mar–July)
          </li>
          <li>
            Research Assistant at Media and Journalism School, University of
            Sheffield
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
