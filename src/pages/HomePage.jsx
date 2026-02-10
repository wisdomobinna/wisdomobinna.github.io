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
          I study the gap between how generative AI systems are designed to function 
          and how people actually experience them — especially when those systems mediate 
          creative work or make consequential content decisions. 
          My research focuses on moments of friction: when artists question authorship 
          in AI-assisted creation, when language models refuse identical requests differently 
          across geopolitical contexts, or when safety mechanisms behave 
          in ways their designers did not anticipate.
          
          Through controlled experiments, interviews, and empirical evaluations of 
          generative model behavior, I surface these misalignments and design transparency, 
          governance, and safety interventions that reflect how people actually work, 
          create, and communicate. My work aims to make generative AI systems more legible, 
          accountable, and aligned with the humans they serve.
          </p>

        {/* <p>In the past, I have contributed to the development of the UN's 
          ODET UNGSP 2025 report on emerging technologies. I was also a Design and Technology Fellow at FASPE in 
          Germany and Poland. Before graduate school, I was part of the communications team at the 
          UK National Health Service. 
          In the past, I have been a software engineer, a visual journalist, and a Designer.
        </p> */}

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
