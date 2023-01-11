import React, { useEffect } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Hotspots from "./pages/Hotspots";
import Employees from "./pages/Employees";
import Groups from "./pages/Groups";
import Reports from "./pages/Reports";
import Admins from "./pages/Admins";
import Settings from "./pages/Settings";

const AuthLayout = React.lazy(() => import("./components/layouts/AuthLayout"));
const DashboardLayout = React.lazy(
  () => import("./components/layouts/DashboardLayout")
);

const routes: RouteObject[] = [
  {
    path: "app",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "hotspots", element: <Hotspots /> },
      { path: "employees", element: <Employees /> },
      { path: "groups", element: <Groups /> },
      { path: "admins", element: <Admins /> },
      { path: "reports", element: <Reports /> },
      { path: "settings", element: <Settings /> },
    ],
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
