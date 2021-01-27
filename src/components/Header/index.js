import React, { Component } from "react";
import TopBar from "./TopBar";
import Middle from "./Middle";
import Menu from "./Menu";

export default class Header extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Middle />
        <Menu />
      </div>
    );
  }
}
