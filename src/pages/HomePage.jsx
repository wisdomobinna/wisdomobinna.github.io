import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import useScrollFade from '../hooks/useScrollFade';
import useScrollVar from '../hooks/useScrollVar';
import { author, nameGloss } from '../data/siteConfig';

// One tall painting, read top to bottom: night, open sky, through the clouds,
// dusk, and finally the obi with its door lit. `at` is the line's position
// down the painting, as a fraction of its height.
const moments = [
  { at: 0, lines: ['You found Wisdom’s', 'corner of the sky'] },
  { at: 0.13, lines: ['Fall slowly.', 'The clouds are softer than they look.'] },
  { at: 0.27, lines: ['Every cloud up here', 'is a question someone forgot to ask.'] },
  { at: 0.41, lines: ['Every system is a story about people.', 'I go looking for the people.'] },
  { at: 0.54, gloss: nameGloss[0] },
  { at: 0.64, gloss: nameGloss[1] },
  { at: 0.75, lines: ['Down there, a light is on.', 'Someone kept the door open.'] },
];

// A few fireflies in the yard at dusk.
const fireflies = [
  [18, 92.2, 0], [27, 93.6, 1.8], [41, 92.8, 0.9], [49, 94.6, 2.6],
  [58, 93.1, 1.2], [66, 95.2, 3.1], [74, 92.6, 0.4], [83, 94.1, 2.2],
];

export default function HomePage() {
  const skyRef = useRef(null);
  useScrollFade(skyRef, '.sky-moment', { full: 0.35, lift: 24 });
  useScrollVar(skyRef);

  return (
    <PageLayout home>
      <div className="sky" ref={skyRef}>
        <h1 className="sr-only">
          {author.name}, {author.role} at {author.employer}
        </h1>

        <div className="sky-cloud sky-cloud-1" aria-hidden="true" />
        <div className="sky-cloud sky-cloud-2" aria-hidden="true" />

        {fireflies.map(([x, y, delay]) => (
          <span
            key={`${x}-${y}`}
            className="firefly"
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
            aria-hidden="true"
          />
        ))}

        {moments.map((m) => (
          <div key={m.at} className="sky-moment" style={{ top: `${m.at * 100}%` }}>
            {m.lines && (
              <p className="sky-lines">
                {m.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            )}
            {m.gloss && (
              <dl className="sky-gloss">
                <dt lang="ig">{m.gloss.word}</dt>
                <dd>
                  <span>{m.gloss.meaning}</span>
                  <span className="sky-gloss-note">{m.gloss.note}</span>
                </dd>
              </dl>
            )}
          </div>
        ))}

        <div className="sky-end">
          <p className="sky-lines">
            <span>Welcome to the obi.</span>
          </p>
          <Link to="/work/" className="sky-enter">
            Come in <span aria-hidden="true">&rarr;</span>
          </Link>
          <p className="sky-foot">
            <Link to="/site-index/">&copy; &infin; {author.name}</Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
