import logo from './logo.svg';
import './App.css';
//function based components
//react frngments
//custom components
//const App=()=>
//state
import {useEffect, useState} from 'react';
const Person=(props)=>{
    return(
      <>
      <h1>Name:{props.name}</h1>
      <h1>Age:{props.age}</h1>
      <h1>Male</h1>
      </>
    )
}
const App=()=> {
  const myval="js";
  const [counter,setCounter]=useState(0);
  function decrement(){
    return setCounter((p)=>p-1);
  }
  function increment(){
    return setCounter((a)=>a+1);
  }
  useEffect(()=>{
    console.log("is useEffect");
  })
  return (
    <div className="App">
      {/* <h1>Hello React{myval}</h1>
      <h2 message={alert("hello")}>Hello World</h2>
      <Person name={'Hari'} age={25}/>
      <Person name={'Raju'} age={22}/>
  {
    <>
    <h1>React Fragment</h1>
    </>
  } */}
  <button onClick={decrement}>-</button>
  <h1>{counter}</h1>
  <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
