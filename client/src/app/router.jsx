import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "../features/home/pages/Home";
import NotFound from "../pages/NotFound";
import AuthLayout from "./layouts/AuthLayout";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import { PATHS } from "../utils/paths";
import About from "../features/about/pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.ABOUT, element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: PATHS.LOGIN, element: <Login /> },
      { path: PATHS.REGISTER, element: <Register /> },
    ],
  },
]);
