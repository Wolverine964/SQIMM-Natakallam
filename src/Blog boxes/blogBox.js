import React, { Component } from 'react'
import './style.css'

export default class blogBox extends Component {
  constructor(props){
    super(props)
    this.data = props.data
  }

  timeAgo = (date) => {
    const today = new Date()
    let difference
    if (date.slice(0,4) != today.getFullYear()){
      difference = today.getFullYear() - date.slice(0,4)
      if(difference !== 1) return (difference + " yrs")
      return ('1 yr')
    }

    if (date.slice(5,7) != ( today.getMonth() + 1)){
      console.log(date.slice(5,7))
      console.log(today.getMonth())
      difference = (today.getMonth() + 1) - date.slice(5,7)
      if(difference !== 1) return (difference + " mon")
      return ('1 mon')
    }

    if (date.slice(8,10) != today.getDate()){
      difference = today.getDate() - date.slice(8,10)
      if(difference !== 1) return (difference + " days")
      return ('1 day')
    }

    if (date.slice(11,13) != today.getHours()){
      difference = today.getHours() - date.slice(11,13) 
      if(difference !== 1) return (difference + " hours")
      return ('1 hour')
    }

    if (date.slice(14,16) != today.getMinutes()){
      difference = today.getMinutes() - date.slice(14,16) 
      if(difference !== 1) return (difference + " min")
      return ('1 min')
    }

  }

  clickMe = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div className="box" key={this.props.key} onClick={this.clickMe}>
        <img src={this.data.img} alt=""just work/>

        <div className="title">
          <b>{this.data.title}</b>
          <b>{this.timeAgo(this.data.postDate)}</b>
        </div>

        <div className="info">
          <p>by {this.data.by}</p>
          <p>{this.data.catogary}</p>
          <p>{this.data.postDate.slice(0,10).replace(/-/g,'.')}</p>
        </div>        
      </div>
    )
  }
}
