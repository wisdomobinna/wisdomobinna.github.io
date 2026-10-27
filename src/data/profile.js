// Research threads shown on the home page. `pubs` are ids from publications.js.
export const threads = [
  {
    key: 'creativity',
    title: 'Authorship and value in AI-assisted art',
    body: 'I built and ran a juried AI art competition at Georgetown, instrumenting every prompt and revision, to ask who people think the author is, what the work is worth, and what protections creators want.',
    link: { label: 'The exhibition', url: '/art/' },
  },
  {
    key: 'safety',
    title: 'Safety of generative models',
    body: 'Text-to-image models can be pushed to produce deeply harmful content. I help measure whether the defenses deployed against that, such as concept filtering, hold up when someone is actively trying to get around them.',
    pubs: ['csam-filtering'],
  },
  {
    key: 'security',
    title: 'Security, through the people who run it',
    body: 'Infrastructure is only as safe as the decisions of the people operating it. I interview and survey the operators behind systems like DNS resolvers to understand how security gets practised, traded off, and sometimes quietly skipped.',
    pubs: ['dns-resolver'],
  },
];

export const education = [
  {
    date: '2024 – 2029',
    place: 'Georgetown University',
    where: 'Washington, DC',
    degree: 'PhD, Computer Science',
    note: 'Advisor: Elissa Redmiles',
  },
  {
    date: '2022 – 2023',
    place: 'University of Sheffield',
    where: 'United Kingdom',
    degree: 'MA, Global Journalism (Distinction)',
    note: 'Advisors: Ilya Yablokov, Bina Ogbebor',
  },
  {
    date: '2015 – 2020',
    place: 'University of Port Harcourt',
    where: 'Nigeria',
    degree: 'BSc, Computer Science (First Class Honours)',
    note: 'Best Graduating Student, Department of Computer Science',
  },
];

export const awards = [
  {
    date: '2025',
    text: 'Fellow, United Nations 63rd Graduate Study Program, Geneva (top 5% of 1,250 graduate students across 203 countries)',
  },
  {
    date: '2025',
    text: 'Honorary Fellow, Fellowships at Auschwitz for the Study of Professional Ethics (Germany, Poland)',
  },
  { date: '2024', text: 'Fritz Family Fellowship' },
  { date: '2023', text: 'Emerging Leaders Award, Black in AI' },
  {
    date: '2022',
    text: 'Allan and Nesta Ferguson Trust Scholarship, University of Sheffield (top 1% of 1,000+ applicants)',
  },
  {
    date: '2022',
    text: 'EducationUSA Opportunity Funds Award, U.S. Department of State (top 1% of 7,500+ applicants)',
  },
  {
    date: '2020',
    text: 'Best Graduating Student, Department of Computer Science, University of Port Harcourt',
  },
];

export const talks = [
  {
    date: '2026',
    text: 'Workshop organizer & facilitator, “AI & the Future of Authorship, Ownership, and Copyright,” Georgetown Day School, Washington, DC',
  },
  {
    date: '2026',
    text: 'Invited speaker & workshop leader, Diversity Day, National Cathedral School, Washington, DC',
  },
  {
    date: '2025',
    text: 'Georgetown AI Art Competition findings, CDT Tech Prom, The LINE DC',
  },
  {
    date: '2025',
    text: 'Georgetown AI Art Exhibition, Lauinger Library, Georgetown University',
  },
];

export const teaching = [
  {
    date: 'Fall 2026',
    text: 'Introduction to Human-Centered Computing, Georgetown University (Teaching Assistant)',
  },
];

export const service = [
  {
    date: '2022 – 2023',
    text: 'President, All African Post Graduate Research Network Society, UK',
  },
  {
    date: '2022 – 2023',
    text: 'Student Representative, National Union of Students Conference, UK',
  },
  {
    date: '2022 – 2023',
    text: 'Departmental Representative, University of Sheffield',
  },
  {
    date: '2017 – 2019',
    text: 'Convener, OpenIQ code learning project, Nigeria',
  },
];

export const experience = [
  {
    date: '2024 – now',
    role: 'Research Lead',
    org: 'Generative Models in Art, Georgetown University',
    note: 'Advisors: Elissa Redmiles, Kristelia Garcia, Toni-Lee Sangastiano',
  },
  {
    date: '2025',
    role: 'Research Group Member',
    org: 'Center for AI and Digital Policy',
    note: 'Comparative policy research on national AI strategies and governance',
  },
  {
    date: '2024',
    role: 'DCA, Department of Communications',
    org: 'National Health Service, UK',
  },
  {
    date: '2023',
    role: 'Graduate Research Assistant',
    org: 'Learning and Teaching Experiences Lab, University of Sheffield',
  },
  {
    date: '2023',
    role: 'Graduate Researcher',
    org: 'Online Misinformation and Self-Censorship in Post-Conflict Contexts',
    note: 'In-depth interviews with 45 journalists',
  },
  {
    date: '2020',
    role: 'Research Fellow',
    org: 'HEDA / United Nations Covid-19 Social Research Initiative, Nigeria',
  },
  {
    date: '2019 – 2021',
    role: 'Visual & Data Journalist',
    org: 'TodayFM 95.1',
  },
  {
    date: '2018 – 2020',
    role: 'Head of Design and Development',
    org: 'Nolela Inc.',
  },
  {
    date: '2018',
    role: 'Software Engineer',
    org: 'MediaCorp Inc.',
  },
];
