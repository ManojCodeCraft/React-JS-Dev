import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import "./style/app.css"
import Contact from "./components/Contact";
import Home from "./components/Home"
function App() {
  const [color,setColor]=useState("white")
 
  const changeBackground = (value) => {
    setColor(value);
  };


const arr =[3,4,5,7,8];
const person ={
  name:"Mayur",
  age:25,
  college:"OIST Indore M.P"
}
  return (
    <div style={{backgroundColor:color}} >
       {/* <div className="navbar">
        <button  onClick={()=>changeBackground("blue")}  className="navbar-btn">
         
          Blue
        </button>
        <button  onClick={()=>changeBackground("pink")}  className="navbar-btn">
         
          Pink
        </button>
        <button onClick={()=>changeBackground("red")}
          className="navbar-btn"
        >
         
          Red
        </button>
        <button   onClick={()=>changeBackground("yellow")} className="navbar-btn">
         
        Yellow
        </button>
      </div> */}
      <Navbar />
      <Home person={person} array={arr} />
      {/* <Services name="Web Development" />
      <AboutUs />
      <Contact /> */}
    </div>
  );
}


export default App;