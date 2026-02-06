import PageLayout from '../components/layout/PageLayout';

export default function AiArtPage() {
  return (
    <PageLayout title="AI Art Competition & Exhibition">
      <h1 className="page-title">AI Art Competition &amp; Exhibition</h1>
      <div className="page-content">
        <p>
          The Georgetown AI Art Competition &amp; Exhibition is an
          interdisciplinary initiative bringing together art, computer science,
          and law to explore the creative possibilities and ethical dimensions
          of AI-generated art.
        </p>
        <p>
          The exhibition showcases works from students and community members who
          use AI tools as part of their creative process, prompting dialogue
          about authorship, originality, and the role of technology in artistic
          expression.
        </p>
        <p>
          <strong>Visit the online exhibition:</strong>{' '}
          <a
            href="https://aiart.georgetown.domains"
            target="_blank"
            rel="noopener noreferrer"
          >
            aiart.georgetown.domains
          </a>
        </p>
      </div>
    </PageLayout>
  );
}
