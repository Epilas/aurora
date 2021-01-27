import React, { Component } from "react";
import MenuButton from "./MenuButton";

const menu = [
  {name: "Kategorie"},
  {name: "Nowości",active: true},
  {name: "Promocje"},
  {name: "Wyprzedaże"},
  {name: "Kolekcje sezony"},
  {name: "Nasza oferta"},
  {name: "Trendy 2018"},
  {name: "Blog"},
  {name: "Kontakt"}
];

const Menu = () => {
  return (
    <div className="container categories">
      {menu.map((el) => {
        return <MenuButton {...el}/>;
      })}
    </div>
  );
};

export default Menu;
