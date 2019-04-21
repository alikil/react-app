import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "./index/index.js";
import Sidebar from "./index/sidebar";
import Laptops from "./index/laptops";


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
      path: "/index/laptops",
      main: () => <div><Laptops /></div>
    },
    {
      path: "/index/phones",
      main: () => <div></div>
    },
    {
      path: "/index/bracers",
      main: () => <div></div>
    }
];


function AppRouterWay() {
  return (
    <Router>
      <div>
        {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
      </div>
    </Router>
  );
}

export default AppRouterWay;
