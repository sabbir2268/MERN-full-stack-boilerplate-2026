import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import Login from './../authPages/Login';
import Register from './../authPages/Register';
import { PATHS } from "./paths";
import About from './../pages/About';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {path: PATHS.ABOUT, element: <About />},
      { path: "*", element: <NotFound /> },
    ],
  },{
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: PATHS.LOGIN, element: <Login /> },
      { path: PATHS.REGISTER, element: <Register /> },
    ]
  }
]);
