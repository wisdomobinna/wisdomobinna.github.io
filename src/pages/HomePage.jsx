import { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';

export default function HomePage() {
  const [expandedYears, setExpandedYears] = useState({ 2025: true });

  const toggleYear = (year) => {
    setExpandedYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

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
          </a> My research interests are broadly in safety and security.
          </p>

          <p>
          My current research uses  computational, economic, and qualitative methods 
          to (1) examine how artificial intelligence is reshaping authorship, 
          creativity, and economic value (2) investigate AI-involved content and user safety and
          (3) design and evaluate safety mechanisms for these outcomes.
          </p>

          {/* <p> 
          I study the gap between how AI systems are designed to function 
          and how people actually experience them — especially when those systems 
          are embedded in creative workflows or make consequential content decisions. 
          My research focuses on moments of friction: when creatives question creative and economic value 
          in AI-involved creation, when vison language models refuse identical requests differently 
          across geopolitical contexts, or when safety mechanisms behave 
          in ways their designers did not anticipate.
           </p> */}
        <h2>Updates</h2>

        <h3
          className="year-toggle"
          onClick={() => toggleYear(2025)}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {expandedYears[2025] ? '▾' : '▸'} 2025
        </h3>
        {expandedYears[2025] && (
          <ul>
            <li>
              Our Georgetown AI-involved Art just got featured at <a
                href="https://cs.georgetown.edu/news-story/ai-in-art-at-2025-techprom/"
                target="_blank"
                rel="noopener noreferrer"
              >
               The Center for Democracy and
              Technology, Washington DC!
              </a>
            </li>
            <li>
              I was amongst 41 graduate fellows to take part in the United Nations Graduate Study 
              Fellowship program in Geneva, Switzerland <a
                href="https://www.ungeneva.org/sites/default/files/2025-07/2025%20GSP%20Report.pdf"
                target="_blank"
                rel="noopener noreferrer"
              > 
               (I contributed to the report on global governance of emerging technologies)</a>
            </li>
            
            <li>
              I was among 12 Design and Technology Fellows at the Fellowships at Auschwitz for the Study of Professional Ethics in Germany &amp; Poland
            </li>
            <li>
              I presented our AI art study at the AI and copyright presentation at Data and Society Workshop, New York
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
        )}

        <h3
          className="year-toggle"
          onClick={() => toggleYear(2024)}
          style={{ cursor: 'pointer', userSelect: 'none' }}
        >
          {expandedYears[2024] ? '▾' : '▸'} 2024
        </h3>
        {expandedYears[2024] && (
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
        )}
      </div>
    </PageLayout>
  );
}
