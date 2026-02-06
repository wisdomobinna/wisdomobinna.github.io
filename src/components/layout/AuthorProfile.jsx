import { author } from '../../data/siteConfig';

export default function AuthorProfile() {
  return (
    <div className="author-profile">
      <img
        className="author-profile__avatar"
        src={author.avatar}
        alt={author.name}
      />
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
        <div className="author-profile__links">
          {author.links.map((link) => (
            <a
              key={link.url}
              className="author-profile__link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <i className={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
