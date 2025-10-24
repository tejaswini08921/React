import React, { Component, createRef } from 'react'
import Vid from "..//Videos/246391_small.mp4"

export default class Video extends Component {
  constructor() {
    super()

    this.state = {
      video: false
    }
  }
  handleChange = () => {
    this.setState({video:!this.state.video})
    this.max = document.getElementById('max')
    if (this.state.video==false) {
      this.max.play()
    }
    else {
      this.max.pause()
    }

  }

  render() {
    return (
      <div>
        <video src={Vid} height={500} width={500} id="max"></video>
        <button onClick={this.handleChange}>{this.state.video ? "pause" : "play"}</button>
      </div>
    )
  }
}
