import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PTCBanner from "./PTC/PTC_Banner.js";
import Sidebar from "./PTC/sidebar";
import "./components/css/transitions.css"
import "./components/css/hovershadow.css";
import CardsList from "./PTC/Cards/CardsList";
import CardsSpecs from "./PTC/Cards/CardsSpecs";

export default function AppRouterWay() {
  const routes = [
    {path: "/",exact: true,main: () => <Redirect to="/PTC/legit"/>},
    {path: "/:page/",exact: true,main: () => <Redirect to="/PTC/legit"/>},
    {path: "/:page/",main:()=><div><PTCBanner /></div>},
    {path: "/:page/",main:()=><aside><Sidebar /></aside>},
    {path: "/:page/:status",exact:true,main:(props)=><main><CardsList {...props}/></main>},
    {path: "/:page/:status/:id",main:(props)=><main><CardsSpecs {...props}/></main>}
  ];
  return (
    <Router>
      {routes.map((route, id) => (
        <Route key={id} path={route.path} exact={route.exact} component={route.main}/>
      ))}
    </Router>
  );
}
