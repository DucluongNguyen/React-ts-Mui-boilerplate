import { lazy } from "react";

import withErrorBoundary from "components/HOCs/withErrorBoundary";
import { RouteBase } from "constants/routeUrl";
import { RouteP } from "interfaces";

const HomePage = lazy(() => import("views/Home"));
const Dashboard = lazy(() => import("views/Dashboard"));
const Page404 = lazy(() => import("views/Page404"));
const About = lazy(() => import("views/About"));

//! Route in Default Layout
const routes: RouteP[] = [
  {
    path: RouteBase.Home,
    exact: true,
    name: "Home",
    component: HomePage,
    isPrivate: false,
  },
  {
    path: RouteBase.About,
    exact: true,
    name: "About",
    component: About,
    isPrivate: false,
  },
  {
    path: RouteBase.Dashboard,
    name: "Dashboard",
    component: Dashboard,
    isPrivate: true,
    exact: true,
  },
  { name: "404", component: Page404 },
];

const wrapRouteErrorBoundary = routes.map((route) => {
  return {
    ...route,
    component: withErrorBoundary(route.component),
  };
});

export default wrapRouteErrorBoundary;
