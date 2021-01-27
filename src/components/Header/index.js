import React from "react";
import TopBar from "./TopBar";
import Middle from "./Middle";
import Menu from "./Menu";
import SideMenu from "./SideMenu";

const Header = () => {
  return (
    <div>
      <TopBar type="desktop"/>
      <Middle />
      <Menu />
      <SideMenu />
    </div>
  );
};

export default Header;
