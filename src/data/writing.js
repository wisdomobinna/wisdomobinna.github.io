import digitalStorytelling from '../content/writing/digital-storytelling.html?raw';
import userGeneratedContent from '../content/writing/user-generated-content.html?raw';

// Essays with a `body` are hosted here at /writing/:slug; others link out.
export const writing = [
  {
    slug: 'naive-bayes-vs-svm',
    title: 'Comparing Naïve Bayes and SVM for Text Classification',
    date: '2023-11-06',
    kind: 'Technical note',
    summary:
      'Machine learning has been widely used in text classification: 224 papers between 2003 and 2022 alone. A hands-on comparison of two workhorse classifiers.',
    url: 'https://medium.com/@wisdom_obinna/comparing-na%C3%AFve-bayes-and-svm-for-text-classification-71874864d4d5',
  },
  {
    slug: 'military-leadership-data',
    title: 'Analyzing the Impact of Military Leadership on Data Management in Africa',
    date: '2023-04-14',
    kind: 'Essay',
    summary:
      'Africa has seen leadership styles from democratic to autocratic, with military rule a significant player in many nations. What does that mean for how states collect and govern data?',
    url: 'https://medium.com/@wisdom_obinna/analyzing-the-impact-of-military-leadership-on-data-management-in-africa-b1e45901547a',
  },
  {
    slug: 'user-generated-content',
    title:
      'Practice, Policy and Legal Issues Raised by the Rise of User-Generated Content',
    subtitle: 'Implications for journalism and the news media',
    date: '2023-02-26',
    kind: 'Essay',
    readTime: '8 min read',
    hero: '/images/writing/j4.jpg',
    summary:
      'From the Daniel Morel case to the Boston Marathon misidentifications to Nigeria’s Twitter ban: what user-generated content has cost journalism, and what it asks of newsrooms.',
    body: userGeneratedContent,
  },
  {
    slug: 'digital-storytelling',
    title:
      'How Has Digital Technology Impacted Storytelling in Contemporary Journalism?',
    date: '2022-11-03',
    kind: 'Essay',
    readTime: '15 min read',
    hero: '/images/writing/j1.jpg',
    summary:
      'From Enrique’s Journey to Snow Fall to 20 Years Gone: three Pulitzer winners across twenty years, and what Web 2.0 did to the way we tell stories.',
    body: digitalStorytelling,
  },
];
