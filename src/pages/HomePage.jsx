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
          </p>
        <p> 
          I examine how algorithmic systems shape decision-making,
          creative production, and content governance, focusing on the frictions that 
          emerge when algorithmic mediation meets creative work, the misalignments between 
          designers' intentions and users' experiences, and how technical interventions 
          succeed or fail at preventing downstream harms. More broadly, I study how intelligent systems 
          like AI can support and complement creatives rather 
          than replace them. I examine the gaps in understanding between how creators 
          conceptualize their process, how audiences perceive AI-involved work and use this knowledge
          to build systems that support and complement human creativity.
        </p>

        <p>I have served in Geneva, Switzerland as a Graduate Fellow, where I contributed to the development of the UN's 
          ODET UNGSP 2026 report on emerging technologies. I was also a Design and Technology Fellow at FASPE in Germany and Poland. 
          Before graduate school, I was part of the communications team at the UK National Health Service. 
          In the past, I have been a software engineer, a visual journalist, and a Designer.
        </p>

        <h2>Updates</h2>

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
