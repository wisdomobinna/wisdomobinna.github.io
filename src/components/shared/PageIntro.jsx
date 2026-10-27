import Gloss from './Gloss';

// Opening lines and a gloss of the tab's Igbo word, shown at the top of each tab.
export default function PageIntro({ title, lines, gloss }) {
  return (
    <header className="page-intro">
      <h1 className="sr-only">{title}</h1>
      <p className="intro-lines">
        {lines.map((line, i) => (
          <span key={i}>{line}</span>
        ))}
      </p>
      {gloss && <Gloss items={gloss} />}
    </header>
  );
}
