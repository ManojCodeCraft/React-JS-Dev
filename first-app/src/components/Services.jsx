import React from 'react'
import Navbar from './Navbar'

function Services(props) {
  return (
    <div style={{height:"30vh",margin:"1rem", width:"auto", backgroundColor:"cyan",display:"flex", flexDirection:"column", "alignItems":"center",justifyContent:"center"}}>

       <h1> Service Page </h1> 
       <h1>  My Service is {props.name} </h1>
    </div>
  )
}

export default Services
