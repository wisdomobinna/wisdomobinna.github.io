import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        &copy; {new Date().getFullYear()} {siteConfig.title}.
      </p>
    </footer>
  );
}
