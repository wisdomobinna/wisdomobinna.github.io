import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.title}. Powered by{' '}
        <a
          href={`https://github.com/${siteConfig.repository}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages
        </a>
        .
      </p>
    </footer>
  );
}
