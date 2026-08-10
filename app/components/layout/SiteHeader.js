import { ThemeToggle } from "../ui/ThemeToggle";

export function SiteHeader({ navItems, profile }) {
  return (
    <header className="top-controls" aria-label="Primary navigation">
      <a className="wordmark" href="#top" aria-label={`${profile.name} home`}>
        {profile.name}
      </a>
      <div className="header-actions">
        <nav className="nav-links">
          {navItems.map(([label, href]) => (
            <a className="nav-link" key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
