import React, { Component } from 'react'
import StarRating from "./StarRating"
export default class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <form>
        <input type="text" placeholder="Name" value=""></input>
        <StarRating/>
        <input type="text" placeholder="Headline Title" value=""></input>
          <input style={{height: '200px'}} type="text" value=""></input>
          <button >Submit</button>
        </form>
      </div>
    )
  }
}
