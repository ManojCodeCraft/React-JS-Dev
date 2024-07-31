// import logo from './logo.svg';
// import './App.css';

import React,{ useEffect, useState } from "react";

import Hooks from "./pages/Hooks";
import Footer from "./common/Footer";
import Routes from "./routes/Routes";
function App() {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);
  const changeBackground = (value) => {
    setColor(value);
  };

  const arr = [3, 4, 5, 7, 8];
  const person = {
    name: "Mayur",
    age: 25,
    college: "OIST Indore M.P",
  };

  return (
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
}

export default App;
