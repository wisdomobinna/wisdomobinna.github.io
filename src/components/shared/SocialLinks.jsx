export default function SocialLinks({ links }) {
  return (
    <ul className="social-links">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
          >
            <i className={link.icon} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
