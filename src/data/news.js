// `date` is 'YYYY', 'YYYY-MM' or 'YYYY-MM-DD'; precision controls how it renders.
// Items dated after today move into "Upcoming" automatically.
// `html` allows inline links; keep it to trusted, hand-written strings.
export const news = [
  {
    date: '2026-08',
    html: 'Teaching assistant this fall for <em>Introduction to Human-Centered Computing</em> at Georgetown.',
  },
  {
    date: '2026',
    html: '<em>I See DNS People</em>, my study of how DNS resolver operators think about security, appears at <strong>SOUPS ’26</strong>. Thank you to K. Barlage and F. Alt.',
  },
  {
    date: '2026',
    html: 'Our evaluation of concept filtering defenses against CSAM generation by text-to-image models appears at <strong>IEEE S&amp;P ’26</strong>.',
  },
  {
    date: '2026',
    html: 'Led a workshop on <em>AI &amp; the Future of Authorship, Ownership, and Copyright</em> at Georgetown Day School, and spoke at Diversity Day at National Cathedral School.',
  },
  {
    date: '2025-12-09',
    html: 'The concept filtering paper is now on <a href="https://arxiv.org/abs/2512.05707" target="_blank" rel="noopener noreferrer">arXiv</a>.',
  },
  {
    date: '2025-10',
    html: 'Presented findings from the <a href="/art/">Georgetown AI Art Competition</a> at the Center for Democracy &amp; Technology’s Tech Prom at The LINE DC.',
  },
  {
    date: '2025',
    html: 'Selected as a Fellow of the United Nations 63rd Graduate Study Program in Geneva (top 5% of 1,250 applicants across 203 countries).',
  },
  {
    date: '2025',
    html: 'Honorary Fellow, Fellowships at Auschwitz for the Study of Professional Ethics (FASPE), in Germany and Poland.',
  },
  {
    date: '2025-04',
    html: 'Presented the AI art exhibition and early findings at Georgetown’s Lauinger Library.',
  },
  {
    date: '2024-09',
    html: 'Started my PhD in Computer Science at Georgetown, advised by <a href="https://elissaredmiles.com/" target="_blank" rel="noopener noreferrer">Elissa Redmiles</a>, with a Fritz Family Fellowship.',
  },
  {
    date: '2023',
    html: 'Received the Emerging Leaders Award from Black in AI.',
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatNewsDate(date) {
  const [y, m, d] = date.split('-');
  if (!m) return y;
  const month = MONTHS[Number(m) - 1];
  return d ? `${month} ${Number(d)}, ${y}` : `${month} ${y}`;
}

export function splitNews(items, today = new Date()) {
  const upcoming = [];
  const past = [];
  items.forEach((item) => {
    const [y, m = 1, d = 1] = item.date.split('-').map(Number);
    (new Date(y, m - 1, d) > today ? upcoming : past).push(item);
  });
  return { upcoming: upcoming.reverse(), past };
}
