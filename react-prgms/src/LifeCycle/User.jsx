import React, { Component } from 'react'

export default class User extends Component {
    constructor(){
        super();
        this.state={
            msg:"Welcome to react.js"
        }
    }

    componentDidMount(){
        alert("component did mount")
    }

    componentDidUpdate(){
        alert("component did update")
    }

    componentWillUnmount(){
        alert("component will unmount")
    }
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
        <h3>Count:{this.props.count}</h3>
      </div>
    )
  }
}
