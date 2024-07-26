import React, { useState } from "react";
import "../style/state.css";
function StateManage() {

  const [color, setColor] = useState("");   // 
  const [maarks,setMarks]=useState([]);
  const [person,setPerson] = useState({})
  const [name, setName] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [theme, setTheme] = useState("white");
  const changeTheme =(value)=>{
     setBgColor(value);
     value=="black"?setColor("white"):setColor("black")
    //  if(value=="black"){
    //     setColor("white");
    //  }
    //  else if (value=="white"){
    //     setColor("black");
    //  }
  }
  return (
    <div  style={{backgroundColor:bgColor,color:color}}>
      <div className="main-state">
        <h1>Change Theme of Application </h1>
        <button onClick={()=>changeTheme("black")}>Dark</button>
        <button onClick={()=>changeTheme("white")}>Light </button>
      </div>
      {/* <h1>Hii I am Learning About State Management </h1>
      <h3>My name is {name}</h3>
      <input type="text" onChange={(event)=>setMyName(event.target.value)} placeholder='Enter your name '/> */}

      <div className="state">
        <h3>
         {name}
        </h3>
      <input type="text" onChange={(event)=>setName(event.target.value)} placeholder='Enter your name '/> 

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto pariatur,
        expedita recusandae quasi rerum reprehenderit libero cum minus impedit
        sequi dolor? Ullam molestias, vitae non aperiam eius expedita eaque
        minus nostrum esse necessitatibus? Illum corporis, maxime fuga ratione
        atque cumque dignissimos a! Cumque impedit itaque eligendi doloribus
        sequi nisi natus?
      </div>
    </div>
  );
}

export default StateManage;
