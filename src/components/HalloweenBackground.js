import React, { Component } from "react";
import "./halloweenbackground.css";

export default class HalloweenBackground extends Component {
  constructor(props) {
    super(props);
    console.log(`there are ${props.children.length} children`);
  }
  render() {
    return <div className="halloween-background">{this.props.children}</div>;
  }
}
