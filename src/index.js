// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Creat a React component
const App = function() {
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};
// Take the React component and shot it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
