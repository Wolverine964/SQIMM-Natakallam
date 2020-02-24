import React, { Component } from "react";

export default class Para extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render() {
    return (
      <div className="container">
        {this.data.title ? (
          <h2 className="title">
            {this.data.title.split(",")[0]} <br />
            {this.data.title.split(",")[1]}
          </h2>
        ) : null}
        {this.data.header ? (
          <h3 className="header">{this.data.header}</h3>
        ) : null}
        <br></br>
        <p className="para">{this.data.postDate}</p>

        <br></br>
        <p className="para">{this.data.otherpara}</p>
        <br></br>
      </div>
    );
  }
}
