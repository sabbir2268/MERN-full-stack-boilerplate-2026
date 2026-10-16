# React Starter Kit

A minimal, production-ready React starter kit with **React 19**, **Vite**, **React Router DOM v7**, **Tailwind CSS v4**, and **Firebase Authentication**.

App code lives in `client/`.

---

## Features

- ⚡ Vite dev server with HMR
- ⚛️ React 19 + StrictMode
- 🧭 React Router DOM v7 (config-based routing)
- 🎨 Tailwind CSS v4 with light/dark theme
- 🔐 Firebase Auth + public/private route guards
- 📁 Feature-based folder structure (`auth`, `home`, `about`)
- 🧩 Reusable UI (`Navbar`, `Footer`, `Buttons`, `Loader`)
- 🧪 ESLint configured

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 19 |
| Vite | 8 |
| React Router DOM | 7 |
| Tailwind CSS | 4 |
| Firebase | 13 |

---

## Quick Start

```bash
# Clone
git clone https://github.com/sabbir2268/react-starter-kit-2026.git
cd react-starter-kit-2026/client

# Install
npm install

# Set up env
cp .env.example .env
# Edit .env with your Firebase/API keys

# Run
npm run dev   # http://localhost:5173
```

---

## Scripts (run inside `client/`)

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```text
client/src/
├── main.jsx          # Entry point (AuthProvider + RouterProvider)
├── app/              # Router + layouts
├── features/         # Feature modules: auth, home, about
│   ├── auth/         # pages, hooks, services
│   ├── home/         # pages
│   └── about/        # pages
├── components/       # common (Navbar, Footer) + ui (Buttons, Loader)
├── context/          # AuthProvider
├── config/           # firebase.js
├── services/         # api.js
├── routes/           # PrivateRoute, PublicRoute
├── utils/            # paths.js (route constants)
├── styles/           # index.css (Tailwind + theme vars)
└── pages/            # NotFound.jsx
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values (all prefixed with `VITE_`):

```
VITE_API_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_PAYMENT_KEY=...
VITE_IMAGE_UPLOAD_KEY=...
```

Get Firebase credentials from the [Firebase Console](https://console.firebase.google.com/). `.env` is gitignored — never commit real secrets.

---

## Routing & Auth

- **Public routes** (`/`, `/about`) — no login required, wrapped in `AppLayout`.
- **Guest routes** (`/login`, `/register`) — wrapped in `PublicRoute`; redirect logged-in users to `/`.
- **Protected routes** — wrapped in `PrivateRoute`; redirect to `/login` if unauthenticated.
- Auth state is provided by `AuthProvider` and consumed via the `useAuth` hook.

Add a new route in `client/src/app/router.jsx`, and add the path constant to `client/src/utils/paths.js`.

---

## Theming

Dark/light mode is driven by a `.dark` class on `<html>`, persisted in `localStorage`, with system-preference fallback. Theme colors are defined as CSS variables in `client/src/styles/index.css` and exposed as Tailwind theme values.

Use Tailwind `dark:` variants for dark-mode styles.

---

## Deployment

```bash
cd client
npm run build
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, Firebase Hosting, GitHub Pages). Don't forget to set your `VITE_*` environment variables on the hosting platform.

---

## License

MIT