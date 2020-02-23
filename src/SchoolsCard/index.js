import React from "react";
import "./style.css";
import Card from "./Card";
import Data from "./data";
import { Container } from "reactstrap";
import CardNav from "./CardNav";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.state.data = Data.map((e, i) => {
      return { ...e, active: i===0? true:false };
    });
  }

  onItemClick = target => {
    let id = target.id.split("_")[0];
    const newData = [...this.state.data].map((e, i) => ({...e, active: i===(+id)? true:false}));
    this.setState({ data: newData });
    
  };

  render() {
    return (
      <div className="App">
        <Container className="Container">
         <h1>Schools Card</h1>
          <CardNav
            items={this.state.data.map(e => e.alt)}
            onItemClick={this.onItemClick}
          />

          {this.state.data.map((el, index) => {
            return (
              <Card
                active={el.active}
                data={el}
                key={index}
              />
            );
          })}
        </Container>
      </div>
    );
  }
}
export default App;
