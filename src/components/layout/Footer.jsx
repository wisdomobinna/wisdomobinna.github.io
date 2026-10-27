import { Link } from 'react-router-dom';
import { author } from '../../data/siteConfig';
import SocialLinks from '../shared/SocialLinks';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="site-footer">
      <SocialLinks links={author.links} />
      <p className="footer-meta">
        <Link to="/site-index/">&copy; &infin; {author.name}</Link>
      </p>
      <ThemeToggle className="footer-theme" />
    </footer>
  );
}
