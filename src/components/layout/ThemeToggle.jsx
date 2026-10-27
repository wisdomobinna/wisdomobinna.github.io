// The initial theme is set by an inline script in index.html to avoid a flash.
export default function ThemeToggle({ className = '' }) {
  const handleClick = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return (
    <button
      className={`theme-toggle ${className}`.trim()}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={handleClick}
    >
      <i className="icon-moon fas fa-moon" aria-hidden="true" />
      <i className="icon-sun fas fa-sun" aria-hidden="true" />
    </button>
  );
}
