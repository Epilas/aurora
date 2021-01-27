import React from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLock,
  AiOutlineUserAdd,
} from "react-icons/ai";
import styles from "./styles.scss";

const TopBar = (props) => {
  return (
    <div className={`topBar ${props.type}`}>
      <div className="container">
        <div className="group">
          <div className="button">
            <AiOutlinePhone className="icon" />
            644 314 115
          </div>
          <div className="button">
            <AiOutlineMail className="icon"/>
            mail@mail.com
          </div>
        </div>
        <div className="group">
          <div className="signupBtn">
            <AiFillLock className="icon"/> Zaloguj
            się
          </div>
          <div className="signupBtn">
            <AiOutlineUserAdd className="icon"/>
            Załóż konto
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
