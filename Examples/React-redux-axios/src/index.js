import React from "react";
import { ReactDOM } from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/reducers/store";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById("root")
);
