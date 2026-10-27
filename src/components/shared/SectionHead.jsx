import { Link } from 'react-router-dom';

export default function SectionHead({ label, title, more }) {
  return (
    <div className="section-head">
      {label && <p className="section-label">{label}</p>}
      <h2 className="section-title">{title}</h2>
      {more && (
        <Link to={more.url} className="section-more">
          {more.label} <span aria-hidden="true">&rarr;</span>
        </Link>
      )}
    </div>
  );
}
