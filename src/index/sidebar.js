import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
      <div>
        <div
          style={{
            padding: "10px",
            margin: "20px",
            marginTop: "10px",
            width: "15%",
            background: "#f0f0f0",
            float: "left"
          }}
        >        
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/index/laptops">Laptops</Link>
            </li>
            <li>
              <Link to="/index/phones">Phones</Link>
            </li>
            <li>
              <Link to="/index/bracers">Bracers</Link>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar;
