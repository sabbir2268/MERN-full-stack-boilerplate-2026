# Client (Frontend)

This folder contains the React frontend application for the **React Starter Kit**.

## 📖 Full documentation

All detailed documentation lives in the root [`README.md`](../README.md), including:

- Features & tech stack
- Project structure & folder architecture
- Installation & setup
- Environment variables (`VITE_*`)
- Available scripts (`dev`, `build`, `preview`, `lint`)
- Routing & route guards (`PrivateRoute`, `PublicRoute`)
- Authentication (Firebase)
- Theming (dark mode)
- Firebase setup
- Deployment

## 🚀 Quick start

```bash
# From the repo root
cd client

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env
# Then edit .env with your Firebase/API credentials

# Start the dev server
npm run dev

# Open http://localhost:5173
```

## 📜 Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

> ⚠️ Never commit real secrets. The `.env` file is gitignored — only `.env.example` is tracked.

## 📁 What's inside

```text
client/
├── public/          # Static assets
├── src/             # Application source (see root README for full layout)
│   ├── main.jsx     # Entry point
│   ├── app/         # Router + layouts
│   ├── features/    # Feature-based modules (auth, home, about)
│   ├── components/  # Reusable UI (common + ui)
│   ├── context/     # AuthProvider
│   ├── config/      # Firebase config
│   ├── services/    # API calls
│   ├── routes/      # Route guards (public/private)
│   ├── utils/       # Path constants
│   └── styles/      # Tailwind + theme variables
├── .env.example     # Example environment variables
├── eslint.config.js # ESLint flat config
├── index.html       # Entry HTML
├── package.json     # Dependencies & scripts
└── vite.config.js   # Vite + React + Tailwind plugins
```

## 🔐 Environment setup

Copy `.env.example` to `.env` and replace the demo Firebase values with your own project credentials from the [Firebase Console](https://console.firebase.google.com/). All variables must be prefixed with `VITE_`.

See the [Environment Variables](../README.md#environment-variables) section in the root README for the full variable list.

---

Part of [React Starter Kit](../README.md).