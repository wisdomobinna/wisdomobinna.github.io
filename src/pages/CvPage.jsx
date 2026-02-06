import PageLayout from '../components/layout/PageLayout';

export default function CvPage() {
  return (
    <PageLayout title="CV">
      <div className="page-content">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Ph.D. in Computer Science</strong>, Georgetown University
            <br />
            <em>Advisor:</em> Elissa Redmiles
          </li>
          <li>
            <strong>M.A. in Global Journalism</strong>, University of Sheffield
            <br />
            <em>Research:</em> AI/User-generated content, self-censorship and
            safety decision-making processes of journalists.
            <br />
            <em>Advisor:</em> Ilya Yablokov
            <br />
            <em>Grade:</em> Distinction
          </li>
          <li>
            <strong>B.S. in Computer Science</strong>, University of Port
            Harcourt
            <br />
            <em>Research:</em> Machine learning in web-based property
            applications
            <br />
            <em>Advisors:</em> Prof. P.O. Asagba, Dr. Peter Izevbizua
            <br />
            <em>Grade:</em> First-Class
          </li>
        </ul>

        <hr />

        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Research Fellow</strong>, University of Sheffield, United
            Kingdom (2024 - Present)
            <br />
            <em>LTE Project</em>
            <br />
            <em>Advisor:</em> Bina Ogbebor
          </li>
          <li>
            <strong>Research Fellow</strong>, United Nations-HEDA Covid-19
            Social Research Project, Nigeria (2022-2023)
            <br />
            <em>Role:</em> Coordinator, Southern Region
          </li>
          <li>
            <strong>Research Assistant</strong>, University of Port Harcourt,
            Nigeria (2015-2020)
            <br />
            <em>Centre for Digital Innovation, Computer Science</em>
            <br />
            <em>Advisors:</em> Prof. P.O. Asagba, Dr. L.U. Oghenekaro
          </li>
        </ul>

        <hr />

        <h2>Skills</h2>
        <ul>
          <li>
            <strong>Data Analysis and Machine Learning (ML):</strong> Python
            (NumPy, Pandas, SciPy, statsmodels, scikit-learn, PyTorch, Keras,
            spaCy, HuggingFace Transformers, NLTK), R (dplyr, igraph), SQL,
            Nvivo, SPSS
          </li>
          <li>
            <strong>Information Visualization:</strong> Tableau, Power BI,
            Python (Matplotlib, seaborn, plotnine), R (ggplot2)
          </li>
          <li>
            <strong>Design and Development:</strong> HTML/CSS, Javascript,
            React, Corel Draw, Adobe Photoshop, Illustrator, CMS, Python
            (streamlit, tkintr)
          </li>
        </ul>

        <hr />

        <h2>Publications and Presentations</h2>
        <ul>
          <li>
            <strong>Wisdom K.O. (2023)</strong>. Self-censorship within the
            Newsroom: Technological practices in the aftermath of a crisis.{' '}
            <em>Journal of New Media and Society</em> (manuscript under review).
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

        <hr />

        <h2>Service and Leadership</h2>
        <ul>
          <li>
            <strong>President</strong>, All African Post Graduate Research
            Network Society, United Kingdom
          </li>
          <li>
            <strong>Student Representative</strong>, National Union of Students
            Conference, United Kingdom
          </li>
          <li>
            <strong>Departmental Representative</strong>, University of
            Sheffield
          </li>
          <li>
            <strong>ICT Editorial Lead</strong>, National Youth Service (NYSC)
          </li>
          <li>
            <strong>Convener</strong>, OpenIQ code learning project, Nigeria
          </li>
          <li>
            <strong>Group Head</strong>, Crowd Management Unit, Salvation
            Ministries International
          </li>
        </ul>

        <hr />

        <h2>Professional Memberships and Affiliations</h2>
        <ul>
          <li>
            <strong>Fellow</strong>, The Boardroom, United Kingdom
          </li>
          <li>
            <strong>Member</strong>, Black in AI, USA
          </li>
          <li>
            <strong>Member</strong>, AAPORG, United Kingdom
          </li>
          <li>
            <strong>EducationUSA Opportunity Fund Scholar</strong>
          </li>
          <li>
            <strong>Data Science AI+</strong>, Nigeria
          </li>
          <li>
            <strong>Student Member</strong>, Nigerian Universities Computer
            Science Association
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
