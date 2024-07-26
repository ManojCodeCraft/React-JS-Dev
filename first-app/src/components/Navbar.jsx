import React, { useState } from "react";
import "../style/navbar.css";
function Navbar() {
  const [direction, setDirection] = useState("row");
  const changeDirection = (value) => {
    setDirection(value);
  };
  console.log("Direction ",direction)
  return (
    <div>
      {/* <div className="navbar">
        <button onClick={()=>changeDirection("column")} className="navbar-btn">
          
          Column
        </button>
        <button onClick={()=>changeDirection("row")} className="navbar-btn">
          
          Row
        </button>
        <button
          onClick={()=>changeDirection("column-reverse")}
          className="navbar-btn"
        >
          
          Column Reverse
        </button>
        <button onClick={()=>changeDirection("row-reverse")} className="navbar-btn">
          
          Row Reverse
        </button>
      </div> */}
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
          <li style={{ padding: "5px" }}>Home</li>
          <li style={{ padding: "5px" }}>About </li>
          <li style={{ padding: "5px" }}>Service </li>
          <li style={{ padding: "5px" }}>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
