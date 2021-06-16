import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/comman/Header";
import React from "react";

import Createpayment from "./components/Createpayment";
import Productlist from "./components/Productlist";

function App() {
  return (
    <div className="App">
      <Header />

      <Route>
        <Route path="/" exact component={Productlist} />
        <Route path="/create" exact component={Createpayment} />
      </Route>
    </div>
  );
}

export default App;
