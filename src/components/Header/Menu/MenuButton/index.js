import React, { Component } from "react";

export default class MenuButton extends Component {
  constructor(props) {
    super(props);

    this.name = props.name;
  }
  render() {
        return <div>{this.name}</div>;
  }
}
