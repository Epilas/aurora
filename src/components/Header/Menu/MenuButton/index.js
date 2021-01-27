import React from "react";

const MenuButton = (props) => {
  return (
    <div className={`menuButton ${props.active ? "active " : ""}${props.type === "side" ? "side " : ""}`}>
      {props.name}
    </div>
  );
};

export default MenuButton;
