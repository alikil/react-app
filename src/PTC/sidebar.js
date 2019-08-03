import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const styleSidebar = {
    padding: "10px",
    margin: "15px 20px",
    width: "15%",
    background: "#f0f0f0",
    float: "left",
    listStyleType: "none"
  }
  return (
        <div>
          <ul style={styleSidebar}>
            <li>
              <Link to="/PTC/legit"><h2 style={{color:'green'}}>Legit</h2></Link>
            </li>
            <li>
              <Link to="/PTC/test"><h2 style={{color:'blue'}}>Test</h2></Link>
            </li>
            <li>
              <Link to="/PTC/scam"><h2 style={{color:'red'}}>Scam</h2></Link>
            </li>
          </ul>
        </div>
  );
}

export default Sidebar;
