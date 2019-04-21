import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./index/index.js";
import Sidebar from "./index/sidebar";
import Laptops from "./index/laptops";

export default function AppRouterWay() {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2><Index /></h2>
    },
    {
      path: "/index",
      main: () => <div><h2><Index /></h2><Sidebar /></div>
    },
    {
      path: "/index",
      exact: true,
      main: () => <div><Laptops /></div>
    },
    {
      path: "/index/laptops",
      exact: true,
      main: () => <div><Laptops /></div>
    },
    {
      path: "/index/phones",
      exact: true,
      main: () => <div></div>
    },
    {
      path: "/index/bracers",
      exact: true,
      main: () => <div></div>
    }
];
  return (
    <Router>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
    </Router>
  );
}
