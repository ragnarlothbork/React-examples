import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "red" };
  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/Get">
        GetListofcountries
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/GetAllOrders">
        GetAllOrders
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/GetAllProducts">
        GetAllProducts
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/CreateOrders">
        CreateOrder
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/CreateProduct">
        CreateProduct
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/CreatePayment">
        CreatePayment
      </NavLink>
    </nav>
  );
}

export default Header;
