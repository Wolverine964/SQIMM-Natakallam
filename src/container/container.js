import React, { Component } from 'react'
import Data from './data'


export default class container extends Component {
  constructor(props){
    super(props)
  }

  changeContent = (e) =>{
    console.log(e)
  }

  render() {
    return (
      <div>
        <div id="navbar">
          {Data.map((le, index) => {
            return <button onClick={this.changeContent} key={index}>{le.title}</button>
          })}
        </div>
      </div>
    )
  }
}
