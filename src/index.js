// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Creat a React component
const App = function() {
  return <div>Hi There!</div>;
};
// Take the React component and shot it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
