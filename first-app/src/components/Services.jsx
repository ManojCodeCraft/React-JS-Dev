import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Services() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url, { headers: { "Content-Type": "application/json" } })
      .then((response) => {
        response.json().then((parsedData) => {
          console.log("API Response ", parsedData)
          setData(parsedData);
        });
      })
      .catch(() => {
        console.log("Failed to fetch Api ");
      });
  }, []);
  return (
    <div
      style={{
        height: "auto",
        margin: "1rem",
        width: "auto",
        zIndex:"1",
        backgroundColor: "cyan",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
   
      {data.map((event)=>{
        return <div>
         <p> Name : {event.name}  </p>
         <p> Email  : {event.email}  </p>
         <p> UserName : {event.username}  </p>
         <p> Website : {event.website}  </p>
         <p> City  : {event.address.city}  </p>
         <p> street : {event.address.street}  </p>
         <p> ZipCode : {event.address.zipcode}  </p>
         <p> LAT : {event.address.geo.lat}  </p>
         <p> LNG : {event.address.geo.lng}  </p>
        </div>
      })}
      

    </div>
  );
}

export default Services;
