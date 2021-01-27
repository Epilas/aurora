import React, { useState } from "react";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import styles from "./styles.scss";

const Middle = () => {
  const [sideMenuVisable, setSideMenuVisable] = useState(false);

  const showSideMenu = () => {
    setSideMenuVisable(!sideMenuVisable);
    document.getElementById("sideMenu").style.width = sideMenuVisable
      ? "0"
      : "100%";
  };

  return (
    <div className="container middle">
      <div className="menuBtn" onClick={showSideMenu}>
        {sideMenuVisable ? (
          <AiOutlineClose size={50} />
        ) : (
          <AiOutlineMenu size={50} />
        )}
      </div>
      <div className="logo">AuroraBox</div>
      <div className="searchContainer">
        <input type="text" placeholder="Co chcesz kupić?" />
        <AiOutlineSearch className="searchIcon" size={30} />
      </div>

      <div className="searchButton">
        <AiOutlineSearch size={45} />
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
};
export default Middle;
