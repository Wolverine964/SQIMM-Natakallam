import React, { Component } from "react";
import Paragrapg from "./Para";
import Data from "./data";
import "./style.css";

export default class blogBoxes extends Component {
  render() {
    return (
      <div className="main-container">
        {Data.map((el, index) => {
          return <Paragrapg data={el} key={index} />;
        })}
      </div>
    );
  }
}
