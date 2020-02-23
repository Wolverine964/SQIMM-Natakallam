import React, { Component } from "react";
import {Row, Col } from "reactstrap";

class Card extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <div className='linky' style={{display: this.props.active? 'block':'none'}}>
        <Row>
          <Col >
            <div>
              <img
                className="box-img"
                src={this.data.img}
                alt={this.data.alt}
              />
            </div>
          </Col>
          <Col>
            <p class ="paragraph"> {this.data.content}</p>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Card;
