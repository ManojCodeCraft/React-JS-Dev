import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [direction, setDirection] = useState("row");
  const changeDirection = (value) => {
    setDirection(value);
  };
  console.log("Direction ",direction)
  return (
    <div>
      
      <nav>
        <ul
          style={{
            listStyleType: "none",
            color: "white",
            backgroundColor: "green",
            padding: "5px",
            display: "flex",
            flexDirection:direction, 
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <li style={{ padding: "5px", textDecoration:"none",color:"white" }}>   <Link style={{ padding: "5px", textDecoration:"none",color:"white" }}  to="/">Home</Link> </li>
          <li ><Link style={{ padding: "5px", textDecoration:"none",color:"white" }}  to="/about-us">About</Link>  </li>
          <li ><Link style={{ padding: "5px", textDecoration:"none",color:"white" }}  to="/services">Sevice</Link>  </li>
          <li ><Link style={{ padding: "5px", textDecoration:"none",color:"white" }}  to="/contact-us">Contact Us</Link> </li>
          <li ><Link style={{ padding: "5px", textDecoration:"none",color:"white" }}  to="/register">Register</Link> </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
