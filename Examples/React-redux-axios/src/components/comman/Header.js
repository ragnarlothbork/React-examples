import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "red" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/">
        GetAllProducts
      </NavLink>
      {"|"}
      <NavLink activeStyle={activeStyle} exact to="/create">
        GetAllProducts
      </NavLink>
    </nav>
  );
}

export default Header;
