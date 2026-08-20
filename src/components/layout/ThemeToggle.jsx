import { useEffect } from 'react';

export default function ThemeToggle() {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const handleClick = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark-mode') ? 'dark' : 'light'
    );
  };

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={handleClick}
    >
      <i className="icon-moon fas fa-moon" />
      <i className="icon-sun fas fa-sun" />
    </button>
  );
}
