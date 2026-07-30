import { NavLink, Outlet } from 'react-router-dom';
import { APP_NAME } from '../theme';
import './Layout.css';

const navItems = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/support', label: 'Support' },
  { to: '/user-agreement', label: 'User Agreement' },
] as const;

export function Layout() {
  return (
    <div className="layout">
      <header className="layout__header">
        <div className="layout__header-inner">
          <NavLink to="/" className="layout__brand" end>
            <img
              className="layout__brand-mark"
              src="/logo.png"
              alt=""
              width={28}
              height={28}
            />
            <span className="layout__brand-name">{APP_NAME}</span>
          </NavLink>
          <nav className="layout__nav" aria-label="Legal pages">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `layout__nav-link${isActive ? ' layout__nav-link--active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        <div className="layout__footer-inner">
          <p className="layout__footer-brand">{APP_NAME}</p>
          <p className="layout__footer-meta">
            Meal planning for households · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
