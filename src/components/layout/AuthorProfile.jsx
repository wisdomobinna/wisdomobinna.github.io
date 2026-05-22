import { author } from '../../data/siteConfig';

export default function AuthorProfile() {
  return (
    <div className="author-profile">
      <img
        className="author-profile__avatar"
        src={author.avatar}
        alt={author.name}
      />
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
        <h3 className="author-profile__name">{author.name}</h3>
        <p
          className="author-profile__bio"
          dangerouslySetInnerHTML={{ __html: author.bio }}
        />
        <p className="author-profile__location">
          <i className="fas fa-fw fa-map-marker-alt" />
          {author.location}
        </p>
        <p className="author-profile__meta">
          <strong>Email</strong>: wko7[at]georgetown.edu
        </p>
        <p className="author-profile__meta">
          <strong>Research Interests</strong>: AI Safety, Security of Intelligent Systems,
          Technology &amp; Society
        </p>
      </div>
    </div>
  );
}
