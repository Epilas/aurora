import React from "react";
import MenuData from "../../../constant/MenuData.json";
import MenuButton from "../Menu/MenuButton";
import TopBar from "../TopBar";
import styles from "./styles.scss";

const SideMenu = () => {
  return (
    <div id="sideMenu" className="sideMenu">
      {MenuData.map((el) => {
        return <MenuButton {...el} type="side" />;
      })}
      <TopBar type="mobile" />
    </div>
  );
};

export default SideMenu;
