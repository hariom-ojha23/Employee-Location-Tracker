import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const AuthLayout = React.lazy(() => import("./components/layouts/AuthLayout"));
const DashboardLayout = React.lazy(
  () => import("./components/layouts/DashboardLayout")
);

const routes = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
];

const App: React.FC = (): JSX.Element => {
  const content = useRoutes(routes);

  return <React.Suspense>{content}</React.Suspense>;
};

export default App;
