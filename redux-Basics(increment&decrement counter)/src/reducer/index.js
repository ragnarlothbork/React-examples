import CounterReducer from "./CounterReducer";
import RightsReducer from "./RightsReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: CounterReducer,
  accessrights: RightsReducer,
});

export default allReducers;
