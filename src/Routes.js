import Home from "Screens/Home";
import About from "Screens/About";

export const publicRoutes = [
  {
    component: Home,
    path: "/",
    exact: true,
  },
  {
    component: About,
    path: "/about",
    exact: true,
  },
];
