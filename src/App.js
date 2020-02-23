import React from 'react';
import logo from './logo.svg';
import BoxesContainer from './BlogBoxes'
import Card from './Card'
import GetInvolve from './GetInvolved'
import SchoolsCard from './SchoolsCard'
import UniversityCard from './UniversityCard'

//if you only spicified the folder
//it'll automatically take the index.js file
import './App.css';

function App() {
  return (
    <div className="App">
      <BoxesContainer />
      <hr />
     
      <hr />
      <Card />
      <hr />
      <GetInvolve />
      <hr />
      <SchoolsCard />
      <hr />
      <UniversityCard />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
