import Paragraph from "./Paragraph";
import React from "react";
import logo from "./logo.svg";
import BoxesContainer from "./BlogBoxes";
import Card from "./Card";
import GetInvolve from "./GetInvolved";
import SchoolsCard from "./SchoolsCard";
import UniversityCard from "./UniversityCard";

//if you only spicified the folder
//it'll automatically take the index.js file
// import "./App.css";

function App() {
  return (
    <div className="App">
      <BoxesContainer />
      <Paragraph />
      <header className="App-header">
        <hr />

        <hr />
        <Card />
        <hr />
        <GetInvolve />
        <hr />
        <SchoolsCard />
        <hr />
        <UniversityCard />
      </header>
    </div>
  );
}

export default App;
