import React from "react";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Get } from "./Get";
import GetAllProducts from "./GetAllProducts";
import GetAllOrders from "./GetAllOrders";
import CreateOrders from "./CreateOrders";
import CreatePayment from "./CreatePayment";
import CreateProduct from "./CreateProduct";
import ProductDetails from "./ProductDetails";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        (//route)
        <Route path="/GetAllOrders" component={GetAllOrders} />
        <Route path="/GetALlProducts" component={GetAllProducts} />
        <Route path="/Get" component={Get} />
        <Route path="/CreatePayment" component={CreatePayment} />
        <Route path="/CreateProduct" component={CreateProduct} />
        <Route path="/CreateOrders" component={CreateOrders} />
        <Route path="/Productdetails/:Code" component={ProductDetails} />
      </Switch>
    </div>
  );
}

export default App;
