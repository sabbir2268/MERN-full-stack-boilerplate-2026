import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "../features/home/pages/Home";
import NotFound from "../pages/NotFound";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import About from "../features/about/pages/About";
export const router = createBrowserRouter([
  // Public pages: no authentication required
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },

  // Guest-only pages
  {
    element: <PublicRoute />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  // Protected pages
  {
    element: <PrivateRoute />,
    children: [],
  },

  // Fallback
  { path: "*", element: <NotFound /> },
]);
