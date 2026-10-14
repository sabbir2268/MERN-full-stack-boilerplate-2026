import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// These values are the minimum Firebase needs to start
const REQUIRED_KEYS = ['apiKey', 'authDomain', 'projectId', 'appId'];

export const isFirebaseConfigured = REQUIRED_KEYS.every((key) =>
  Boolean(firebaseConfig[key]),
);

let app = null;
let auth = null;

if (isFirebaseConfigured) {
  try {
    // Reuse the existing app if hot reload runs this file twice
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
  } catch (error) {
    app = null;
    auth = null;
    if (import.meta.env.DEV) {
      console.warn('Firebase failed to initialize:', error.message);
    }
  }
} else if (import.meta.env.DEV) {
  console.warn('Firebase is not configured. Copy .env.example to .env to enable it.');
}

export { app, auth };