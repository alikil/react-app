import React from 'react';
import './App.scss';
import HeaderNav from "./nav/nav";
import Routway from "./router";
import Footer from "./Footer/footer.js";

function AppRouter() {
  return (
    <div>
    <HeaderNav />
    <Routway />
    <Footer />
    </div>
  );
}

export default AppRouter;
