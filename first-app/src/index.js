var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(
  <div>
    <h1>Hello World!!!</h1>
  </div>,
  document.getElementById("root")
);
var newheading = document.createElement("h1");
newheading.innerHTML = "Hello World!!!";
document.getElementById("root").appendChild(newheading);
