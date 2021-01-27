import React, { Component } from "react";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import Colors from "../../../Colors";

export default class Middle extends Component {
  render() {
    return (
      <div className="container middle">
        <div class="menu">
          <AiOutlineMenu size={42}/>
        </div>
        <div className="logo">AuroraBox</div>
        <div className="search">
          <input type="text" placeholder="Co chcesz kupić?" />
          <AiOutlineSearch size={30} color={Colors.light.tint} />
        </div>

        <div className="searchButton">
          <AiOutlineSearch size={45}/>
        </div>

        <div className="shoppingBag">
          <div className="iconBag">
            <AiOutlineShopping size={50} />
            <div className="badge">2</div>
          </div>
          <div className="label">Twój koszyk</div>
        </div>
      </div>
    );
  }
}
