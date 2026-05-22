import { author } from '../../data/siteConfig';

export default function AuthorProfile() {
  return (
    <div className="author-profile">
      {author.avatar && (
        <img
          src={author.avatar}
          alt={author.name}
          className="author-profile__avatar"
        />
      )}
      <h3 className="author-profile__name" style={{ color: 'var(--color-primary)' }}>{author.name}</h3>
      <div className="author-profile__icons">
        {author.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className="author-profile__icon-link"
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
      <div>
        <p className="author-profile__meta">
          <strong>Email</strong>: wko7[at]georgetown.edu
        </p>
        <p className="author-profile__meta">
          <strong>Research Interests</strong>: Safety and Security
        </p>
      </div>
    </div>
  );
}
