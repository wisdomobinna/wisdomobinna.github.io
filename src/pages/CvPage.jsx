import PageLayout from '../components/layout/PageLayout';

export default function CvPage() {
  return (
    <PageLayout title="CV">
      <section className="section">
        <h2 className="section-title">CV</h2>
        <p>
          3700 O St NW, Washington, DC 20057 &bull; wko7@georgetown.edu &bull;{' '}
          <a href="https://www.linkedin.com/in/wisdom-obinna/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{' '}
          &bull;{' '}
          <a href="https://twitter.com/wisdomKobinna" target="_blank" rel="noopener noreferrer">
            X
          </a>{' '}
          &bull;{' '}
          <a href="https://wisdomobinna.github.io" target="_blank" rel="noopener noreferrer">
            Webpage
          </a>
        </p>

        <h3>Education</h3>
        <ul>
          <li>
            <strong>Georgetown University</strong>, Washington, DC, USA (2024 -
            2029)
            <br />
            PhD Computer Science
            <br />
            <em>Supervisor:</em> Prof. Elissa Redmiles
          </li>
          <li>
            <strong>University of Sheffield</strong>, United Kingdom (2022 -
            2023)
            <br />
            Master of Arts, Global Journalism: Distinction | 4.00/4.00 WES iGPA
            <br />
            <em>Supervisor:</em> Dr. Ilya Yablokov
          </li>
          <li>
            <strong>University of Port Harcourt</strong>, Nigeria (UNIPORT)
            (2015 - 2020)
            <br />
            Bachelor of Science, Computer Science: First Class Honours | CGPA
            4.63/5.00 (3.80/4.00 WES iGPA)
            <br />
            <em>Supervisor:</em> Prof. P.O. Asagba
          </li>
        </ul>

        <hr />

        <h3>Core Competences</h3>
        <ul>
          <li>
            <strong>Research Methods &amp; Data Analysis:</strong> Quantitative
            and qualitative research methodologies, survey design and
            implementation, interview data collection and analysis, Python
            (NumPy, Pandas, SciPy, statsmodels, scikit-learn), R (dplyr), SQL,
            NVivo, SPSS
          </li>
          <li>
            <strong>Human-Computer Interaction &amp; UX:</strong> User-centered
            design principles, human factors analysis, accessibility compliance
            (WCAG guidelines), usability testing, interface design and
            evaluation
          </li>
          <li>
            <strong>Communication &amp; Presentation:</strong> Technical
            writing, research paper preparation, policy brief development,
            public presentation, workshop facilitation, stakeholder engagement
          </li>
          <li>
            <strong>Literature Review &amp; Synthesis:</strong> Systematic
            literature searches, research synthesis, framework mapping, public
            comment organization and analysis
          </li>
        </ul>

        <hr />

        <h3>Research Experience</h3>
        <ul>
          <li>
            <strong>Research Lead</strong>, Generative Models in Art, Washington,
            DC (Sept 2024 - ongoing)
            <br />
            <em>Advisors:</em> Elissa Redmiles, Kristelia Garcia, Toni-Lee
            Sangastiano
            <br />
            Designed and deployed an interactive generative AI system for a
            juried art competition, instrumented to capture iterative creation
            behavior, decision timestamps, prompt revisions, and
            authorship-attribution data throughout the creative process.
            Developed and administered structured creator and evaluator surveys
            examining perceived authorship, creative contribution, copyright
            ownership, and desired legal protections; coordinated a multi-stage
            evaluation involving 115 peer jurors and five expert judges to
            assess submissions and select 12 featured works. Presented findings
            at Lauinger Library (Apr 2025) and the Center for Democracy &amp;
            Technology&rsquo;s Tech Prom at The LINE DC (Oct 2025), contributing
            evidence relevant to U.S. Copyright Office policy discussions.
          </li>
          <li>
            <strong>Research Group Member</strong>, Center for AI and Digital
            Policy, Washington, DC (Jan - Apr 2025)
            <br />
            <em>Advisor:</em> Melodena Stephens (Professor, Innovation
            Management, Mohammed Bin Rashid School of Government, Dubai)
            <br />
            Conducted policy research on responsible AI governance and
            regulatory frameworks across jurisdictions; drafted policy briefs
            and comparative analyses of national AI strategies.
          </li>
          <li>
            <strong>Graduate Research Assistant</strong>, Learning and Teaching
            Experiences Lab, Sheffield, UK (May - Jul 2023)
            <br />
            <em>Advisor:</em> Dr. Bina Ogbebor
            <br />
            Conducted semi-structured interviews with international students to
            evaluate pedagogical experiences; used statistical analysis and
            NVivo for qualitative coding of behavioral and motivational
            patterns.
          </li>
          <li>
            <strong>Graduate Research Project</strong>, Online Misinformation
            and Self-Censorship in Post-Conflict Context (Jan - Sept 2023)
            <br />
            <em>Advisor:</em> Dr. Ilya Yablokov
            <br />
            Conducted in-depth interviews with 45 journalists on human
            behavioral factors in information security contexts; developed a
            framework categorizing self-censorship into avoidance, conformity,
            equilibrium, and veiled approaches.
          </li>
          <li>
            <strong>Research Fellow</strong>, HEDA/United Nations Covid-19
            Social Research Initiative, Nigeria (May - Sept 2020)
            <br />
            Collaborated with a team of 10 stakeholders processing
            heterogeneous data on welfare issues of doctors and care workers
            across 400 communities in Southern Nigeria; used ML techniques
            (Na&iuml;ve Bayes, BERT, SVM) for sentiment analysis and Power BI
            dashboards to visualize fund flows.
          </li>
        </ul>

        <hr />

        <details className="cv-secondary">
          <summary>Industry &amp; Other Experience</summary>
          <ul>
            <li>
              <strong>DCA, Department of Communications</strong>, National
              Health Service, United Kingdom (Mar - Aug 2024)
            </li>
            <li>
              <strong>Visual &amp; Data Journalist</strong>, TodayFM 95.1 (Jan
              2019 - Oct 2021)
            </li>
            <li>
              <strong>Head of Design and Development</strong>, Nolela Inc. (Jun
              2018 - Dec 2020)
            </li>
            <li>
              <strong>Software Engineer</strong>, MediaCorp Inc. (Jun - Dec
              2018)
            </li>
          </ul>
        </details>

        <hr />

        <h3>Publications and Presentations</h3>
        <ul>
          <li>
            <strong>Obinna W., Barlage K., Alt F.</strong>. I See DNS People:
            DNS Resolver Security, Through Operator Perspectives and
            Practices.{' '}
            <em>To appear at SOUPS 2026.</em>
          </li>
          <li>
            <strong>Cretu A.M., Kireev K., Abdalla A., Obinna W., Meier R.,
            Bargal S.A., et al.</strong>. Evaluating Concept Filtering Defenses
            against Child Sexual Abuse Material Generation by Text-to-Image
            Models.{' '}
            <em>arXiv preprint arXiv:2512.05707, 2025.</em>
          </li>
          <li>
            <strong>Obinna W., Wang J., Lima G., Garcia K., Girgic Hlaca N.,
            Sangastiano T., Redmiles E.</strong>. What is the value of AI art:
            Evidence from a juried art exhibition.{' '}
            <em>ACM Creativity and Cognition.</em>
          </li>
          <li>
            <strong>Wisdom K.O., Siyu Ming (2023)</strong>. User-generated
            content (UGC) in the news and the impacts of Algorithms.{' '}
            <em>
              Digital Media Group, School of Journalism, Media and
              Communications, University of Sheffield, United Kingdom
            </em>
            .
          </li>
          <li>
            <strong>Wisdom K.O. (2023)</strong>. Analyzing the Impact of
            Military Leadership on Data Management in Africa. <em>Medium</em>.{' '}
            <a
              href="https://medium.com/@wisdom_obinna/analyzing-the-impact-of-military-leadership-on-data-management-in-africa-b1e45901547a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </li>
          <li>
            <strong>Obinna, W. K., &amp; Udo, M. J. (2022)</strong>. Improving
            online Real Estate Management System using data analytics.{' '}
            <em>Journal of Emerging Technologies</em>, 2(2), 66-75.{' '}
            <a
              href="https://orcid.org/0000-0003-1940-8754"
              target="_blank"
              rel="noopener noreferrer"
            >
              ORCID
            </a>
          </li>
        </ul>

        <h3>Invited Talks or Workshops</h3>
        <ul>
          <li>
            Invited Workshop Organizer &amp; Facilitator, Georgetown Day School,
            &ldquo;AI &amp; The Future of Authorship, Ownership, and
            Copyright,&rdquo; Georgetown Day School (Washington, DC), 2026.
          </li>
          <li>
            Invited Speaker &amp; Workshop Leader, Diversity Day, National
            Cathedral School (Washington, DC), 2026.
          </li>
        </ul>

        <hr />

        <h3>Awards / Honors</h3>
        <ul>
          <li>
            Fellow, United Nations 63rd Graduate Study Program, Geneva,
            Switzerland (top 5% of 1,250 graduate students across 203
            countries), 2025
          </li>
          <li>
            Honorary Fellow, Fellowships at Auschwitz for the Study of
            Professional Ethics &mdash; Germany, Poland, 2025
          </li>
          <li>Fritz Family Fellowship, USA, 2024</li>
          <li>Emerging Leaders Award, Black in AI, USA, 2023</li>
          <li>
            Allan and Nesta Ferguson Trust Scholarship, University of Sheffield, United Kingdom.
          </li>
          <li>
            EducationUSA Opportunity Funds Award, U.S. Department of State. 
          </li>
          <li>
            Best Graduating Student, Department of Computer Science, University
            of Port Harcourt, Nigeria, 2019 Class, 2020
          </li>
        </ul>

        <hr />

        <h3>Community Service</h3>
        <ul>
          <li>
            <strong>President</strong>, All African Post Graduate Research
            Network Society, United Kingdom (2022.09 - 2023.05)
          </li>
          <li>
            <strong>Student Representative</strong>, National Union of Students
            Conference, United Kingdom (2022.09 - 2023.05)
          </li>
          <li>
            <strong>Departmental Representative</strong>, University of
            Sheffield (2022.09 - 2023.05)
          </li>
          <li>
            <strong>ICT Editorial Lead</strong>, National Youth Service (NYSC)
            (2021.02 - 2022.02)
          </li>
          <li>
            <strong>Convener</strong>, OpenIQ code learning project, Nigeria
            (2017.06 - 2019.12)
          </li>
        </ul>

        <hr />

        <h3>Teaching Experience</h3>
        <ul>
          <li>
            <strong>Introduction to Human-Centered Computing</strong>,
            Georgetown University &mdash; Teaching Assistant (2026.08 -
            2026.12)
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}
