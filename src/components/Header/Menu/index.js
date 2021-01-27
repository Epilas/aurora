import React from "react";
import MenuButton from "./MenuButton";
import MenuData from "../../../constant/MenuData";
import styles from "./styles.scss";

const Menu = () => {
  return (
    <div className="container categories">
      {MenuData.map((el) => {
        return <MenuButton {...el} />;
      })}
    </div>
  );
};

export default Menu;
