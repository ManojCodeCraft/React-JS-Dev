import React, { useState } from 'react'
import "../style/register.css"
function Register() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [age,setAge]=useState("")
    const [phone,setPhone]=useState("")
    const [pin,setPin]=useState("")
    const [isSubmitted,setSubmitted]=useState(false)
    const handleSubmit =(e)=>{
       e.preventDefault()
       setSubmitted(true);
    }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

        {/* <h1> Welcome to Registration Page</h1> */}
        <div style={{textAlign:'center'}}>
            <p>Name {name} </p>
            <p> Email : {email} </p>
            <p> Phone : {phone} </p>
            <p> Age  : {age}</p>
            <p> Pin : {pin}</p>
          
        </div>
         <form action="" className='register'>
          {isSubmitted? <h4 style={{color:"green"}}>Form Submitted Successfully </h4>:""}
            <label htmlFor=""> Name </label>
            <input onChange={(e)=>setName(e.target.value)} type="text" />
            <label htmlFor=""> Email </label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" />
            <label htmlFor="">Phone </label>
            <input onChange={(e)=>setPhone(e.target.value)} type="text" />
            <label htmlFor=""> Age </label>
            <input onChange={(e)=>setAge(e.target.value)} type="text" />
            <label htmlFor=""> Address </label>
            <input type="text" />
            <label htmlFor="">Pincode</label>
            <input onChange={(e)=>setPin(e.target.value)} type="text" />
         <button onClick={(e)=>handleSubmit(e)} >Submit</button>
         </form>
    </div>
  )
}

export default Register
