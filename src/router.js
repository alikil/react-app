import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Index from "./index/index.js";
import Sidebar from "./index/sidebar";
import Laptops from "./index/Products/laptops/laptops.js";
import Phones from "./index/Products/phones/phones.js";
import Bracers from "./index/Products/bracers/bracers.js";

import "./components/css/transitions.css"
import "./components/css/hovershadow.css";


import LaptopSpec from "./index/Products/laptops/spec";
import PhonesSpec from "./index/Products/phones/spec";
import BracersSpec from "./index/Products/bracers/spec";


export default function AppRouterWay() {

  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <h2><Redirect to="/index"/></h2>
    },
    {
      path: "/index",
      main: () => <div className="opacityTr"><h2><Index /></h2><Sidebar /></div>
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
      main: () => <div><Phones /></div>
    },
    {
      path: "/index/bracers",
      exact: true,
      main: () => <div><Bracers /></div>
    },
    {
      path: "/index/laptops/:id",
      main: (props) => <div><LaptopSpec {...props}/></div>
    },
    {
      path: "/index/phones/:id",
      main: (props) => <div><PhonesSpec {...props}/></div>
    },
    {
      path: "/index/bracers/:id",
      main: (props) => <div><BracersSpec {...props}/></div>
    },





];
  return (
    <Router>
      <div>
        {routes.map((route, id) => (
            <Route
              key={id}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
      </div>
    </Router>
  );
}
