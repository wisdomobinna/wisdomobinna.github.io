import { NavLink } from 'react-router-dom';
import { mainNav } from '../../data/navigation';
import ThemeToggle from './ThemeToggle';

export default function Dock({ home = false }) {
  return (
    <header className={`dock${home ? ' dock-home' : ''}`}>
      <nav className="dock-nav" aria-label="Main">
        {mainNav.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.url === '/'}
            className={({ isActive }) => `dock-link${isActive ? ' active' : ''}`}
          >
            <span className="nav-igbo" lang="ig">
              {item.igbo}
            </span>
            <span className="nav-label">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      <ThemeToggle className="dock-theme" />
    </header>
  );
}
