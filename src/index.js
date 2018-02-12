import React, { Component } from "react"
import ReactDOM from "react-dom"

export default class Hello extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}

const mountNode = document.getElementById('app')
ReactDOM.render(<Hello />, mountNode)
