export const publicationCategories = [
  { key: 'conferences', title: 'Conference Papers', showTitle: false },
  { key: 'manuscripts', title: 'Journal Articles', showTitle: true },
];

export const publications = [
  {
    id: 'dns-resolver',
    tag: "SOUPS '26",
    title:
      'I See DNS People: DNS Resolver Security, Through Operator Perspectives and Practices',
    category: 'conferences',
    date: '2026-01-01',
    authors: 'W. Obinna, K. Barlage, and F. Alt',
    authorSelf: 'W. Obinna',
    venue: 'Symposium On Usable Privacy and Security 2026',
    links: {},
  },
  {
    id: 'csam-filtering',
    tag: "IEEE S&P '26",
    title:
      'Evaluating Concept Filtering Defenses against Child Sexual Abuse Material Generation by Text-to-Image Models',
    category: 'conferences',
    date: '2025-12-09',
    authors:
      'A.M. Cretu, K. Kireev, A. Abdalla, W. Obinna, R. Meier, S.A. Bargal, et al.',
    authorSelf: 'W. Obinna',
    venue: 'IEEE Symposium on Security and Privacy 2026',
    links: { paper: 'https://arxiv.org/abs/2512.05707' },
  },
  {
    id: 'ai-art-value',
    tag: "C&C '26",
    title: 'What is the value of AI art: Evidence from a juried art exhibition',
    category: 'conferences',
    date: '2026-02-23',
    authors:
      'W. Obinna, J. Wang, G. Lima, K. Garcia, N. Girgic Hlaca, T. Sangastiano, and E. Redmiles',
    authorSelf: 'W. Obinna',
    venue: 'ACM Conference on Creativity & Cognition 2026',
    links: {},
    aiArtLink:
      'https://tes.georgetown.edu/announcements/prof-elissa-redmiles-co-organizes-juried-ai-art-competition-with-georgetown-art-computer-science-law/',
  },
  {
    id: 'analytics',
    tag: 'JET \'22',
    title:
      'Improving online Real Estate Management System using data analytics',
    category: 'manuscripts',
    date: '2022-06-03',
    authors: 'W.K. Obinna and M.J. Udo',
    authorSelf: 'W.K. Obinna',
    venue: 'Journal of Emerging Technologies 2 (2), 66-75, 2022',
    links: {
      pdf: 'https://drive.google.com/file/d/1J9UXtta8jEiagjP8W7I_LUH9DXepDtkU/view?usp=sharing',
    },
  },
];
