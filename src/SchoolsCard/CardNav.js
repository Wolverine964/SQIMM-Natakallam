import React, { Component } from "react";
import { Row, Col } from "reactstrap";

export default class CardNav extends Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.items.map((title, idx) => (
            <Col key={title + "-" + idx}>
              <h2>
                <button
                  id={idx + "_" + title}
                  className="link"
                  onClick={e => this.props.onItemClick(e.target)}
                >
                  {title}
                </button>
              </h2>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
