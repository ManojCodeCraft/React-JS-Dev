import React, { useEffect, useRef, useState,useCallback } from "react";
import Image from "../assets/Image.png";
/*
1. useState  --> Done
2. useEffect  --> Done 
3. useRef
4. useContext  --> Redux Context
5. useCallBack
6. useMemo
*/
function Hooks() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [marks, setMarks] = useState([]); // Array State
  const [person, setPerson] = useState({}); // Object State
  const [status, setStatus] = useState(false); // boolean State
  let count=useRef(0);
  console.log("Counter :  ",count.current)
  //  stateName , stateChangeFunction =useState(3);
  useEffect(() => {
      const login =localStorage.getItem('login');
      if(login) {
        setStatus(true);
      }
      else{
        setStatus(false);
      }
  }, [status]);


  useEffect(() => {
      count.current=count.current+1;
}, [count]);

  const loginHandle = () => {
    localStorage.setItem("login", true);
    window.location.reload();
  };

  const logoutHandle = () => {
    localStorage.removeItem("login");
    window.location.reload();

  };

  // let ref = useRef(0);

  // function handleClick() {
  //   ref.current = ref.current + 1;
  //   alert('You clicked ' + ref.current + ' times!');
  // }


  const handleClick =useCallback(()=>{
       setCounter(counter+1);
  },[counter])
  return (
    <div>
      {/* <h3> {counter} </h3>
      <button onClick={() => setCounter(counter + 1)}> Increase </button>
      <button onClick={() => setCounter(counter - 1)}>Descrease</button>
      <h1> Name : {name} </h1> */}
     <h2>Count Value :  {counter} </h2>
  <button  onClick={handleClick}> Increase  </button>
      {/* <h1 style={{ color: status ? "green" : "red" }}>
        {" "}
        User is {status ? "LoggedIn " : "Logged Out "}{" "}
      </h1>
      <button onClick={() => loginHandle()}  style={{padding :"10px",backgroundColor:"green"}}> Login </button>
     
      &nbsp;  &nbsp;  &nbsp;
      <button onClick={() => logoutHandle()} style={{padding :"10px",backgroundColor:"red"}}> Logout </button> */}

      {/* <input  onChange={(e)=>setName(e.target.value)}   type="text" placeholder="Enter your name " /> */}
      {/*    
   <img src={Image}  alt="" /> */}
    </div>
  );
}
export default Hooks;
