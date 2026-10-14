import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

// Replace with your real repository URL
const GITHUB_URL = "https://github.com/your-username/your-repo";

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
    title: "Build & tooling",
    items: [
      "Vite + React with hot reload",
      "ESLint with React Hooks and React Refresh rules",
    ],
  },
  {
    title: "Styling & theme",
    items: [
      "Tailwind CSS v4",
      "Light, dark, and system themes",
      "Semantic color tokens (bg-surface, text-muted, text-primary)",
      "Google Fonts: Inter and Poppins, with fallbacks",
      "No-flash theme script",
    ],
  },
  {
    title: "Routing",
    items: [
      "React Router v7 with createBrowserRouter",
      "Main and auth layouts",
      "Route constants in one file",
      "Home, About, Login, Register, and 404 pages",
    ],
  },
  {
    title: "Auth & state",
    items: [
      "AuthProvider, AuthContext, and useAuth hook",
      "ProtectedRoute that remembers where you came from",
      "Login and Register forms with controlled inputs",
    ],
  },
  {
    title: "Firebase",
    items: [
      "Client initialized with demo config",
      "Never breaks if env values are missing",
      "Auth instance ready to use",
    ],
  },
  {
    title: "Components & config",
    items: [
      "Navbar with active-link styling",
      "Footer",
      ".env.example with Firebase, API, payment, and image-upload placeholders",
    ],
  },
];

const ROADMAP = [
  "Express + MongoDB backend",
  "Real API calls and persisted sessions",
  "Social login buttons (Firebase auth is already initialized)",
  "Stripe payments (env placeholder only)",
  "ImgBB image upload (env placeholder only)",
  "Dashboard page, and wiring ProtectedRoute into the router",
  "Forgot password and social login pages (placeholders exist)",
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
      <section className="py-8 text-center">
        <span className="inline-block rounded-full border bg-surface px-3 py-1 text-xs font-medium text-muted">
          React + Vite + Tailwind + Firebase starter
        </span>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Start your next React project in minutes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          A clean, themeable client template with routing, auth state, and
          Firebase config already set up. Clone it, add your idea, and ship.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to={PATHS.REGISTER}
            className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-hover"
          >
            Try the auth flow
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border bg-surface px-6 py-3 font-medium text-foreground hover:bg-hover"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* 2. Tech stack */}
      <section aria-label="Tech stack">
        <ul className="flex flex-wrap justify-center gap-2">
          {TECH.map((tech) => (
            <li
              key={tech}
              className="rounded-full border bg-surface px-4 py-1.5 text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. What's included */}
      <section>
        <SectionHeading
          title="What's included"
          subtitle="Everything below works today."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, items }) => (
            <article key={title} className="rounded-lg border bg-surface p-5">
              <h3 className="text-lg font-semibold">{title}</h3>
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
        <pre className="mx-auto max-w-2xl overflow-x-auto rounded-lg border bg-surface p-4 text-sm text-foreground">
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
          subtitle="Not implemented yet, so you know exactly what you're getting."
        />
        <ul className="mx-auto max-w-2xl space-y-2 rounded-lg border border-dashed p-5 text-sm text-muted">
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
