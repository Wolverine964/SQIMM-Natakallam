import Paragraph from "./Paragraph";
import React from "react";
import logo from "./logo.svg";
import BoxesContainer from "./BlogBoxes";

//if you only spicified the folder
//it'll automatically take the index.js file
// import "./App.css";

function App() {
  return (
    <div className="App">
      <BoxesContainer />
      <Paragraph />
    </div>
  );
}

export default App;
