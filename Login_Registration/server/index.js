const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success"); // Send "Success" if password matches
        } else {
          res.json("The password is incorrect"); // Send password incorrect message
        }
      } else {
        res.json("No records exists"); // Send no records exists message
      }
    })
    .catch(err => {
      console.error('Error finding user:', err);
      res.status(500).json("Server error");
    });
});

app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
