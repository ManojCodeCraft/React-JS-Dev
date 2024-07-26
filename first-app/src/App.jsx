// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";

import Hooks from "./pages/Hooks";
import Footer from "./common/Footer";
function App() {
  const [color,setColor]=useState("white")
   const [count,setCount]=useState(0);
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
{/* <Students/> */}
<Hooks/>
{/* <ConditionalRendering/> */}
      {/* <Register/> */}
      {/* <StateManage/> */}
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
      {/* <Navbar />
      <Home person={person} array={arr} /> */}
      {/* <Services name="Web Development" />
      <AboutUs />
      <Contact /> */}

      <Footer/>
    </div>
  );
}

export default App;
