import React from 'react';
import HeaderNav from "./Header/header";
import FooterNav from "./Footer/footer";
import Routway from "./router";
import BackgroundIndex from "./background-design.jpg";

function AppRouter() {
  const backIndex = {
    backgroundSize: "cover",
    backgroundImage: `url(${BackgroundIndex})`
    }
  return (
    <div style={backIndex}>
    <header><HeaderNav /></header>
    <div style={{overflow:"auto"}}><Routway /></div>
    <footer><FooterNav /></footer>
    </div>
  );
}
export default AppRouter;
