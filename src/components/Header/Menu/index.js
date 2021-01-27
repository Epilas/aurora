import React, { Component } from "react";
import MenuButton from "./MenuButton";

const menu = [
  "Kategorie",
  "Nowości",
  "Promocje",
  "Wyprzedaże",
  "Kolekcje sezony",
  "Nasza oferta",
  "Trendy 2018",
  "Blog",
  "Kontakt",
];

export default class Menu extends Component {
  render() {
    return (
      <div className="container">
        {menu.forEach((element) => 
          <MenuButton name="FFF" />
        )}
      </div>
    );
  }
}
