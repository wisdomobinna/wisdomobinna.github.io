export const publicationCategories = [
  { key: 'conferences', title: 'Conference Papers' },
  { key: 'manuscripts', title: 'Journal Articles' },
];

// `status` shows next to the venue (e.g. 'To appear'); `award` renders a badge;
// `teaser` is an optional image shown beside the entry; `note` explains marks like *.
// `bibtex` fields feed the generated citation in PubEntry.
export const publications = [
  {
    id: 'dns-resolver',
    tag: "SOUPS '26",
    title:
      'I See DNS People: DNS Resolver Security, Through Operator Perspectives and Practices',
    category: 'conferences',
    year: 2026,
    authors: 'W. Obinna, K. Barlage, and F. Alt',
    authorSelf: 'W. Obinna',
    venue: 'Symposium On Usable Privacy and Security (SOUPS) 2026',
    thread: 'security',
    links: {},
    bibtex: {
      type: 'inproceedings',
      key: 'obinna2026dns',
      author: 'Obinna, Wisdom and Barlage, K. and Alt, F.',
      booktitle: 'Symposium On Usable Privacy and Security (SOUPS)',
    },
  },
  {
    id: 'csam-filtering',
    tag: "IEEE S&P '26",
    title:
      'Evaluating Concept Filtering Defenses against Child Sexual Abuse Material Generation by Text-to-Image Models',
    category: 'conferences',
    year: 2026,
    authors:
      'A.M. Cre\u021bu, K. Kireev*, A. Abdalla*, W. Obinna*, R. Meier, S.A. Bargal, E.M. Redmiles, and C. Troncoso',
    authorSelf: 'W. Obinna*',
    note: '* Equal contribution',
    venue: 'IEEE Symposium on Security and Privacy 2026',
    thread: 'safety',
    teaser: {
      src: '/images/papers/csam-filtering.jpg',
      alt: 'First page of the paper, showing its title, authors and abstract',
    },
    links: {
      paper: 'https://arxiv.org/abs/2512.05707',
      pdf: 'https://arxiv.org/pdf/2512.05707',
      code: 'https://github.com/spring-epfl/t2i-child-filtering',
    },
    bibtex: {
      type: 'inproceedings',
      key: 'cretu2026concept',
      author:
        'Cre{\\c{t}}u, Ana-Maria and Kireev, Klim and Abdalla, Amro and Obinna, Wisdom and Meier, Raphael and Bargal, Sarah Adel and Redmiles, Elissa M. and Troncoso, Carmela',
      booktitle: 'IEEE Symposium on Security and Privacy (S\\&P)',
      eprint: '2512.05707',
      archivePrefix: 'arXiv',
    },
  },
  // {
  //   id: 'ai-art-value',
  //   tag: "C&C '26",
  //   title: 'What is the value of AI art: Evidence from a juried art exhibition',
  //   category: 'conferences',
  //   year: 2026,
  //   authors:
  //     'W. Obinna, J. Wang, G. Lima, K. Garcia, N. Girgic Hlaca, T. Sangastiano, and E. Redmiles',
  //   authorSelf: 'W. Obinna',
  //   venue: 'ACM Conference on Creativity & Cognition 2026',
  //   thread: 'creativity',
  //   links: {},
  //   aiArtLink:
  //     'https://tes.georgetown.edu/announcements/prof-elissa-redmiles-co-organizes-juried-ai-art-competition-with-georgetown-art-computer-science-law/',
  // },
  {
    id: 'analytics',
    tag: "JET '22",
    title:
      'Improving online Real Estate Management System using data analytics',
    category: 'manuscripts',
    year: 2022,
    authors: 'W.K. Obinna and M.J. Udo',
    authorSelf: 'W.K. Obinna',
    venue: 'Journal of Emerging Technologies 2 (2), 66-75, 2022',
    links: {
      pdf: 'https://drive.google.com/file/d/1J9UXtta8jEiagjP8W7I_LUH9DXepDtkU/view?usp=sharing',
    },
    bibtex: {
      type: 'article',
      key: 'obinna2022improving',
      author: 'Obinna, Wisdom K. and Udo, M.J.',
      journal: 'Journal of Emerging Technologies',
      volume: '2',
      number: '2',
      pages: '66--75',
    },
  },
];

export function toBibtex(pub) {
  const { type, key, ...fields } = pub.bibtex;
  const entries = { title: `{${pub.title}}`, ...fields, year: String(pub.year) };
  const body = Object.entries(entries)
    .map(([k, v]) => `  ${k} = {${v}}`)
    .join(',\n');
  return `@${type}{${key},\n${body}\n}`;
}
