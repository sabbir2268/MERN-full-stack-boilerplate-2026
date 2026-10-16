# React Starter Kit

A production-ready, minimal React starter kit built with **React 19**, **Vite**, **React Router DOM v7**, **Tailwind CSS v4**, and **Firebase Authentication**. It includes a clean feature-based folder structure, dark/light theme support, public & protected routing, and a Firebase config ready to wire up to your own project.

> 📦 All application code lives in the `client/` directory. This README documents the whole template.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Folder Architecture](#folder-architecture)
- [Routing & Route Guards](#routing--route-guards)
- [Authentication](#authentication)
- [Theming (Dark Mode)](#theming-dark-mode)
- [Firebase Setup](#firebase-setup)
- [Adding New Features](#adding-new-features)
- [Linting & Code Quality](#linting--code-quality)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Features

| Feature | Description |
|---------|-------------|
| ⚡ **Vite** | Lightning-fast dev server with Hot Module Replacement (HMR) and optimized builds. |
| ⚛️ **React 19** | Latest React with `createRoot` and StrictMode by default. |
| 🧭 **React Router DOM v7** | File-friendly config-based routing with `createBrowserRouter`. |
| 🎨 **Tailwind CSS v4** | Utility-first CSS via the Vite plugin, with a custom design system. |
| 🌙 **Dark Mode** | System-preference aware dark/light theme persisted in `localStorage`. |
| 🔐 **Firebase Auth** | Firebase Authentication config + auth provider + public/private route guards. |
| 📁 **Feature-based structure** | Code grouped by feature (`auth`, `home`, `about`) for scalability. |
| 🧩 **Reusable UI** | Common layout components (Navbar, Footer) and UI primitives (Buttons, Loader). |
| 🧪 **ESLint** | Configured with React hooks and refresh rules for clean code. |

---

## Tech Stack

```text
Framework:       React 19
Build tool:      Vite 8
Routing:         React Router DOM 7
Styling:         Tailwind CSS 4 (@tailwindcss/vite)
Auth backend:    Firebase (Authentication)
Language:        JavaScript (ES modules, JSX)
Linting:         ESLint (flat config)
Package manager: npm / yarn / pnpm
```

---

## Project Structure

```text
react-starter-kit-2026/
├── README.md                 # This file (root documentation)
├── client/                   # Frontend application
│   ├── public/               # Static assets (favicon, images)
│   │   ├── favicon/
│   │   └── images/
│   ├── .env.example          # Example environment variables (copy to .env)
│   ├── .gitignore
│   ├── eslint.config.js      # ESLint flat config
│   ├── index.html            # Entry HTML (includes theme script)
│   ├── package.json          # Dependencies & scripts
│   ├── package-lock.json
│   └── vite.config.js        # Vite config (React + Tailwind plugins)
│
│   └── src/                  # Application source
│       ├── main.jsx          # React entry point (AuthProvider + RouterProvider)
│       ├── index.html-linked CSS
│       ├── styles/
│       │   └── index.css     # Tailwind imports, theme vars, dark mode
│       ├── utils/
│       │   └── paths.js      # Centralized route path constants (PATHS)
│       ├── services/
│       │   └── api.js        # Placeholder for API calls
│       ├── config/
│       │   └── firebase.js   # Firebase app & auth initialization
│       ├── context/
│       │   ├── AuthProvider.jsx
│       │   └── authContext.jsx
│       ├── app/
│       │   ├── router.jsx    # Route definitions (createBrowserRouter)
│       │   └── layouts/
│       │       ├── AppLayout.jsx     # Default layout (Navbar + main + Footer)
│       │       └── AuthLayout.jsx    # Auth-only layout
│       ├── components/
│       │   ├── common/
│       │   │   ├── Navbar.jsx
│       │   │   └── Footer.jsx
│       │   └── ui/
│       │       ├── Buttons.jsx
│       │       └── Loader.jsx
│       ├── features/         # Feature-based modules
│       │   ├── auth/
│       │   │   ├── pages/        # Login.jsx, Register.jsx
│       │   │   ├── hooks/        # useAuth.js
│       │   │   └── services/     # authServices.js
│       │   ├── home/
│       │   │   └── pages/        # Home.jsx
│       │   └── about/
│       │       └── pages/        # About.jsx
│       ├── pages/
│       │   └── NotFound.jsx    # 404 fallback
│       └── routes/
│           ├── PrivateRoute.jsx  # Protected route guard
│           └── PublicRoute.jsx   # Guest-only route guard
```

---

## Prerequisites

- **Node.js** 18 or newer (recommended: LTS)
- A package manager: **npm**, **yarn**, or **pnpm**
- A Firebase project (for authentication) — see [Firebase Setup](#firebase-setup)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/react-starter-kit-2026.git
cd react-starter-kit-2026
```

### 2. Install dependencies

All dependencies live in the `client/` folder:

```bash
cd client
npm install
# or: yarn install   |   pnpm install
```

### 3. Set up environment variables

Copy the example file and fill in your own values:

```bash
cp .env.example .env
```

Then edit `.env` with your Firebase and API credentials (see [Environment Variables](#environment-variables)).

### 4. Start the development server

```bash
npm run dev
# or: yarn dev   |   pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) (Vite default). The page hot-reloads as you edit files.

---

## Environment Variables

Create a `.env` file in `client/` based on `.env.example`. All variables must be prefixed with `VITE_` to be exposed to the Vite client code.

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Base URL of your backend API | `http://localhost:5000/api` |
| `VITE_FIREBASE_API_KEY` | Firebase Web API key | `AIzaSy...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase Auth domain | `your-project.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID | `your-project-id` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase Storage bucket | `your-project.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID | `123456789012` |
| `VITE_FIREBASE_APP_ID` | Firebase App ID | `1:123456789012:web:abcdef...` |
| `VITE_PAYMENT_KEY` | Stripe / payment provider key (demo) | `demo_stripe_payment_key` |
| `VITE_IMAGE_UPLOAD_KEY` | ImgBB / image upload API key (demo) | `demo_imgbb_key` |

`.env` is gitignored — never commit real secrets.

---

## Available Scripts

Run these from inside the `client/` directory:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the app for production (output to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

Example:

```bash
cd client
npm run dev        # develop
npm run build      # production build
npm run preview    # test production build locally
npm run lint       # lint the codebase
```

---

## Folder Architecture

### `src/main.jsx` — Application entry point
Bootstraps the app inside `StrictMode`, wraps everything in `AuthProvider` (Firebase auth state) and `RouterProvider` (React Router), and injects the global stylesheet.

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
```

### `src/app/router.jsx` — Route definitions
Routes are defined with `createBrowserRouter` from React Router DOM v7:

- **Public routes** (`/`, `/about`) — wrapped in `AppLayout`, no login required.
- **Guest routes** (`/login`, `/register`) — wrapped in `PublicRoute`, redirect to `/` if already logged in.
- **Protected routes** — wrapped in `PrivateRoute`, redirect to `/login` if not authenticated.
- **Fallback** — `*` renders `NotFound`.

### `src/features/` — Feature-based modules
Each feature owns its pages, hooks, and services. This keeps the codebase scalable as you add more features:

```
features/
  auth/
    pages/     Login.jsx, Register.jsx
    hooks/     useAuth.js
    services/  authServices.js
  home/
    pages/     Home.jsx
  about/
    pages/     About.jsx
```

### `src/components/` — Reusable UI
- `common/` — Shell components used across layouts (`Navbar`, `Footer`).
- `ui/` — Primitive UI bits (`Buttons`, `Loader`).

### `src/utils/paths.js` — Centralized route constants
Use `PATHS` instead of hardcoding strings:

```js
import { PATHS } from "../utils/paths";
// PATHS.HOME = "/", PATHS.ABOUT = "/about", PATHS.LOGIN = "/login", ...
```

---

## Routing & Route Guards

### Route guards

- **`PrivateRoute`** — Renders child routes only when the user is authenticated; otherwise redirects to `/login`, remembering the original destination in location state so you can send users back after login.
- **`PublicRoute`** — Renders child routes only for guests (not logged in); redirects authenticated users to `/`.

### Adding a new route

1. Add the path to `src/utils/paths.js` (optional but recommended).
2. Register the route in `src/app/router.jsx`, wrapping it in the appropriate layout or guard:

```jsx
{
  path: "/dashboard",
  element: <PrivateRoute />,
  children: [{ path: "", element: <Dashboard /> }],
},
```

3. Create the page under the relevant feature folder, e.g. `features/dashboard/pages/Dashboard.jsx`.

---

## Authentication

Authentication is powered by **Firebase Authentication** and exposed through React context.

### Files involved

- `src/config/firebase.js` — Initializes the Firebase app and exports `auth`.
- `src/context/AuthProvider.jsx` — Holds `user`, `setUser`, `loading`, `setLoading` state.
- `src/context/authContext.jsx` — The `AuthContext` definition.
- `src/features/auth/hooks/useAuth.js` — Custom hook to consume auth context.
- `src/features/auth/pages/Login.jsx`, `Register.jsx` — Login/register UI.
- `src/features/auth/services/authServices.js` — Auth service calls.

### Using auth in a component

```jsx
import { useAuth } from "../features/auth/hooks/useAuth";

function MyComponent() {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) return <Loader />;
  if (!isAuthenticated) return <p>Please log in.</p>;

  return <p>Welcome, {user.email}</p>;
}
```

---

## Theming (Dark Mode)

The app supports light/dark themes driven by a `.dark` class on `<html>`.

- `src/styles/index.css` — Defines CSS variables for both themes (`--bg`, `--surface`, `--brand`, etc.) and registers them as Tailwind theme values via `@theme inline`.
- `index.html` — Runs an inline script before React hydrates so the theme is applied immediately (no flash of wrong theme).
- Theme preference is read from `localStorage` key `theme`, falling back to the system preference (`prefers-color-scheme`).

Tailwind usage:

```jsx
<div className="bg-background text-foreground dark:bg-surface">
  {/* Uses --bg / --fg in light mode, --surface / --fg in dark mode */}
</div>
```

Use `dark:` variants for dark-mode-specific styles:

```jsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

---

## Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable **Authentication** and sign-in methods you need (Email/Password, Google, etc.).
3. From Project Settings → General → **Your apps**, add a **Web app** and copy the `firebaseConfig` object.
4. Replace the demo values in `client/.env` with your real config values.
5. Initialize in `src/config/firebase.js` (already wired to `import.meta.env.VITE_*` variables):

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

> ⚠️ The values in `.env.example` are placeholders. Replace them with your own Firebase project credentials before enabling authentication.

---

## Adding New Features

Follow this checklist when adding a new feature (e.g., "dashboard"):

1. Create `src/features/<feature>/pages/<Page>.jsx`.
2. Add the route to `src/app/router.jsx` (wrapped in `PrivateRoute` if protected).
3. (Optional) Add a path constant to `src/utils/paths.js`.
4. (Optional) Add shared components under `src/components/ui/` or `src/components/common/`.
5. (Optional) Add API calls under `src/services/api.js` or feature-specific `services/`.

---

## Linting & Code Quality

The project uses ESLint with the flat config (`eslint.config.js`), including:

- `eslint:recommended`
- `eslint-plugin-react-hooks` (recommended)
- `eslint-plugin-react-refresh` (Vite HMR)

Run linting:

```bash
cd client
npm run lint
```

> 💡 The template intentionally does **not** enable the React Compiler, to avoid impacting dev and build performance. You can add it later by following the [React Compiler installation docs](https://react.dev/learn/react-compiler/installation).

TypeScript is not enabled by default. For type-aware lint rules in production apps, consider migrating to the TypeScript template (`typescript-eslint`).

---

## Deployment

### Build for production

```bash
cd client
npm run build
```

This outputs static assets to `client/dist/`, ready to deploy to any static host:

- **Vercel**: Import the repo, set build command `npm run build` (in `client/`), output directory `client/dist`.
- **Netlify**: Same — build command `npm run build`, publish directory `client/dist`.
- **Firebase Hosting**: `firebase deploy` after building.
- **GitHub Pages**: Use `gh-pages` or a GitHub Action deploying `client/dist`.

Remember to configure your `VITE_*` environment variables on the hosting platform as well.

---

## Contributing

Contributions are welcome! Please:

1. Fork the repo and create a feature branch (`git checkout -b feature/your-feature`).
2. Make your changes and run `npm run lint` to keep the code clean.
3. Commit with a clear message (`git commit -m "feat: add dashboard page"`).
4. Push and open a Pull Request.

Please keep changes consistent with the existing folder architecture and coding style.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Roadmap / Ideas

- [ ] TypeScript migration
- [ ] React Compiler (opt-in)
- [ ] State management (Zustand / Redux Toolkit)
- [ ] Form handling (React Hook Form + Zod)
- [ ] API layer (Axios / fetch wrapper with interceptors)
- [ ] Unit & E2E tests (Vitest + Playwright / Cypress)
- [ ] Component library (shadcn/ui or Radix primitives)

---

Made with ⚛️ + Vite + Tailwind.