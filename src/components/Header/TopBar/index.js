import React, { Component } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLock,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Colors from "../../../Colors";

export default class TopBar extends Component {
  render() {
    return (
      <div className="topBar">
        <div className="container">
          <div className="row">
            <div className="button">
              <AiOutlinePhone className="icon" color={Colors.light.tint} />
              +48 123 12 32
            </div>
            <div className="button">
              <AiOutlineMail className="icon" color={Colors.light.tint} />
              mail@mail.com
            </div>
          </div>
          <div className="row">
            <div className="rect">
              <AiFillLock className="icon" color={Colors.light.tint} /> Zaloguj się
            </div>
            <div className="rect">
              <AiOutlineUserAdd className="icon" color={Colors.light.tint} />
              Załóż konto
            </div>
          </div>
        </div>
      </div>
    );
  }
}
