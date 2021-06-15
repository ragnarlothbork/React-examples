import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, accessRTS } from "./actions/CounterActions";

function App() {
  const counter = useSelector((state) => state.counter);
  const accessRights = useSelector((state) => state.accessrights);
  const dispath = useDispatch();
  return (
    <div className="Container">
      <h1>TotalValue: {counter}</h1>
      <button onClick={() => dispath(add(3))}> + </button>{" "}
      <button onClick={() => dispath(sub(3))}> - </button>
      {accessRights ? (
        <div>
          <h3> Access Enabled </h3>{" "}
          <button onClick={() => dispath(accessRTS(false))}>Disable</button>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <h3> Access Disabled </h3>{" "}
          <button onClick={() => dispath(accessRTS(true))}>Enable</button>{" "}
        </div>
      )}
    </div>
  );
}

export default App;
