import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../utils/paths";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-hover"
  }`;

  

function Navbar() {
  return (
    <header className="border-b bg-surface">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-lg font-bold text-blue-600 flex items-center gap-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          StarterKit
        </Link>
        <div className="flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to={PATHS.ABOUT} className={linkClass}>
            About
          </NavLink>

          <NavLink to={PATHS.LOGIN} className={linkClass}>
            Login
          </NavLink>
          <NavLink to={PATHS.REGISTER} className={linkClass}>
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
