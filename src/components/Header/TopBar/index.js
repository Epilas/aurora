import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLock,
  AiOutlineUserAdd,
} from "react-icons/ai";
import Colors from "../../../constant/Colors";

const TopBar = (props) => {
  return (
    <div className={`topBar ${props.type}`}>
      <div className="container">
        <div className="row">
          <div className="button">
            <AiOutlinePhone className="icon" color={Colors.light.tint} />
            644 34 65
          </div>
          <div className="button">
            <AiOutlineMail className="icon" color={Colors.light.tint} />
            mail@mail.com
          </div>
        </div>
        <div className="row">
          <div className="rect">
            <AiFillLock className="icon" color={Colors.light.tint} /> Zaloguj
            się
          </div>
          <div className="rect">
            <AiOutlineUserAdd className="icon" color={Colors.light.tint} />
            Załóż konto
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
