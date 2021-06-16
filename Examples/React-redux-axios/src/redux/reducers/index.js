import { combineReducers } from "redux";
import {
  productsReducer,
  selectedProductsReducer,
  paymentReducer,
} from "./productreducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  payment: paymentReducer,
});
export default reducers;
