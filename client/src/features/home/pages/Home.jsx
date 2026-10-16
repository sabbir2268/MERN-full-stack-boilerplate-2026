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

const WHY_USE = [
  "Save setup time",
  "Follow a consistent folder structure",
  "Build maintainable, scalable applications",
  "Reuse your foundation across projects",
];

const WHATS_INCLUDED = [
  "React + Vite with JavaScript",
  "Routing, layouts and route guards",
  "Axios API client and optional Firebase Auth",
  "Tailwind CSS, CSS Modules and reusable components",
  "Linting, formatting and testing tools",
];

const GET_STARTED = [
  "Create a repository from this template",
  "Install dependencies with npm install",
  "Configure environment variables",
  "Run npm run dev and start building",
];

const WORKFLOW = [
  "Add or remove features as needed",
  "Connect your own backend API",
  "Enable Firebase authentication when needed",
  "Customize layouts, themes and design",
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
          Ready-to-use React starter kit
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          A clean, themeable client template with routing, auth state, API
          service layer, and Firebase config already set up. Clone it, add your
          idea, and ship.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          
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

      {/* 3. Why use this template */}
      <section>
        <SectionHeading
          title="Why use this template?"
          subtitle="Start building features instead of configuring the same tools for every new project."
        />
        <ul className="mx-auto max-w-2xl space-y-2 text-sm text-muted">
          {WHY_USE.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. What's included */}
      <section>
        <SectionHeading
          title="What's included?"
          subtitle="Everything you need to establish a clean React development workflow."
        />
        <ul className="mx-auto max-w-2xl space-y-2 text-sm text-muted">
          {WHATS_INCLUDED.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. How to get started */}
      <section>
        <SectionHeading
          title="How to get started"
          subtitle="Create your own project from the GitHub template in minutes."
        />
        <ol className="mx-auto max-w-2xl space-y-2 text-sm text-muted list-decimal list-inside">
          {GET_STARTED.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>

      {/* 6. Built for your workflow */}
      <section>
        <SectionHeading
          title="Built for your workflow"
          subtitle="Keep the foundation reusable while adapting it to each project's requirements."
        />
        <ul className="mx-auto max-w-2xl space-y-2 text-sm text-muted">
          {WORKFLOW.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 7. Quick start */}
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
    </div>
  );
}

export default Home;
