import React, { Component } from 'react'
import ON from "../IMAGES/Gemini_Generated_Image_lh6ozulh6ozulh6o (1).png"
import OFF from "../IMAGES/Gemini_Generated_Image_lh6ozulh6ozulh6o.png"



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      bulb: OFF
    }
  }
  handleBulb = () => {
    this.setState({ bulb: ON })
  }
  handleBuulb = () => {
    this.setState({ bulb: OFF })
  }
  render() {
    return (
      <div>
        <div>
          <img src={this.state.bulb} alt="" height={300} width={300} />
        </div>
        <div>
          <button onClick={this.handleBulb}>ON</button>
          <button onClick={this.handleBuulb}>OFF</button>
        </div>

      </div>

    )
  }
}