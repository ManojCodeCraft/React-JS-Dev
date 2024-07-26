import React from "react";
import StudentTable from "./StudentTable";

const data = [
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 1,
    age: 34,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 1,
    age: 13,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 2,
    age: 17,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 2,
    age: 31,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 1,

    age: 10,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 1,
    age: 17,
  },
  {
    name: "ABC",
    email: "abc@abc.com",
    phone: 5654654,
    gender: 2,
    age: 18,
  },
];

function Students() {
  return (
    <div>
      <h2>This is Students Data </h2>
      <StudentTable data={data} />
    </div>
  );
}

export default Students;
