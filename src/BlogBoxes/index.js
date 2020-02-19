import React, { Component } from 'react'
import BlogBox from './blogBox'
import Data from './data'
import './style.css'

export default class blogBoxes extends Component {

  render() {
    return (
      <div className="main-container">
        {Data.map((el, index) => {
          return <BlogBox data={el} key={index} />
        })}
      </div>
    )
  }
}
