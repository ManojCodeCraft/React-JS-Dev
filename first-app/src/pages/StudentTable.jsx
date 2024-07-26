
import React, { useEffect, useState } from "react";
import "../style/student.css"
function StudentTable(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, []);

  return (
    <div>
      <h3>Data Table for Student</h3>
      <table
      border="1px solid black"
   

      >
        <tbody>
          <thead>
            <th >Name </th>
            <th >Email </th>
            <th > Phone</th>
            <th > Gender</th>
            <th > Vote Eligiblity </th>
          </thead>
          <tr >
            {data?.map((value, index) => {
              return (
                <div key={index}  style={{width:"100%"}}>
                  <td> {value?.name} </td>
                  <td> {value?.email} </td>
                  <td> {value?.phone} </td>
                  <td> {value?.gender==1?"Male":"Female"} </td>
                  <td>{value?.age>=18?"Eligible":"Not Eligible"}  </td>
                </div>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
