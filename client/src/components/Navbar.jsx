import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
  }`;

function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-bold text-blue-600">
          MERN Boilerplate
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
