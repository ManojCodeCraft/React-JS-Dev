import React, { useState } from "react";

function ConditionalRendering() {
  const [theme, setTheme] = useState(false);
  const [color, setColor] = useState("white");
  const changeTheme = (color, value) => {
    setTheme(value);
    setColor(color);
  };
  return (
    <div style={{ backgroundColor: color ,height:"100vh",color:"grey"}}>
      <button onClick={() => changeTheme("black", true)}> Dark </button>
      <button onClick={() => changeTheme("white", false)}> Light </button>
   
      {theme ? (
        <div>
          <h1>This is Dark Theme </h1>
        </div>
      ) : (
        <div>
          <h1> This is Light Theme</h1>
        </div>
      )}
    </div>
  );
}

export default ConditionalRendering;
