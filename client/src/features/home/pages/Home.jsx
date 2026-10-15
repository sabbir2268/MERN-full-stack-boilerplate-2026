import { Link } from "react-router-dom";
import { PATHS } from "../../../utils/paths";

// Replace with your real repository URL
const GITHUB_URL = "https://github.com/sabbir2268/react-frontend-boilerplate-2026";

const TECH = [
  "React 19",
  "Vite 8",
  "Tailwind CSS v4",
  "React Router v7",
  "Firebase",
  "ESLint 10",
];

const FEATURES = [
  {
    title: "Routing & layouts",
    items: [
      "React Router v7 with createBrowserRouter",
      "Public, guest-only, and protected route groups",
      "Main and auth layouts with Outlet",
      "Route constants in one place (utils/paths)",
    ],
  },
  {
    title: "Authentication",
    items: [
      "AuthProvider + AuthContext + useAuth hook",
      "PublicRoute redirects logged-in users away from login/register",
      "PrivateRoute guards dashboard/profile routes",
      "Firebase auth instance ready to use",
    ],
  },
  {
    title: "Styling & theme",
    items: [
      "Tailwind CSS v4",
      "Light, dark, and system themes",
      "Semantic tokens: bg-surface, text-foreground, text-primary",
      "No-flash theme script in index.html",
    ],
  },
  {
    title: "API & services",
    items: [
      "src/services/api.js fetch wrapper",
      "Base URL from VITE_API_URL env var",
      "Bearer token helpers (setAuthToken / clearAuthToken)",
      "Demo users, posts, and auth endpoints",
    ],
  },
  {
    title: "Components",
    items: [
      "Navbar with active-link styling",
      "Footer",
      "Buttons component",
      "Loader component",
    ],
  },
];

const ROADMAP = [
  "Dashboard and Profile pages wired into PrivateRoute",
  "Forgot password and social login pages",
  "Connect api.js endpoints to a real backend",
];

const QUICK_START = `git clone <your-repo-url>
cd <project-folder>
npm install
cp .env.example .env
npm run dev`;

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}

function Home() {
  return (
    <div className="space-y-16 text-foreground">
      {/* 1. Hero */}
      <section className="py-12 text-center">
        <span className="inline-block rounded-full border bg-surface px-3 py-1 text-xs font-medium text-muted">
          React Frontend Boilerplate 2026
        </span>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl text-foreground">
          Ready-to-use React frontend starter
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          A clean, themeable client template with routing, auth state, API
          service layer, and Firebase config already set up. Clone it, add your
          idea, and ship.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to={PATHS.LOGIN}
            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Login
          </Link>
          <Link
            to={PATHS.REGISTER}
            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
          >
            Register
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line bg-surface px-6 py-3 font-medium text-foreground hover:bg-hover transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* 2. Tech stack */}
      <section aria-label="Tech stack">
        <SectionHeading title="Built with" subtitle="Modern frontend stack" />
        <ul className="flex flex-wrap justify-center gap-2">
          {TECH.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. What's included */}
      <section>
        <SectionHeading title="What's included" subtitle="Works out of the box" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, items }) => (
            <article key={title} className="rounded-lg border border-line bg-surface p-5">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Quick start */}
      <section>
        <SectionHeading
          title="Quick start"
          subtitle="Four commands from clone to running app."
        />
        <pre className="mx-auto max-w-2xl overflow-x-auto rounded-lg border border-line bg-surface p-4 text-sm text-foreground">
          <code className="text-foreground">{QUICK_START}</code>
        </pre>
        <p className="mt-3 text-center text-xs text-muted">
          On Windows PowerShell, use <code>copy</code> instead of{" "}
          <code>cp</code>.
        </p>
      </section>

      {/* 5. Roadmap */}
      <section>
        <SectionHeading
          title="On the roadmap"
          subtitle="Coming next — help us build it."
        />
        <ul className="mx-auto max-w-2xl space-y-2 rounded-lg border border-dashed border-line bg-surface p-5 text-sm text-muted">
          {ROADMAP.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true">○</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
