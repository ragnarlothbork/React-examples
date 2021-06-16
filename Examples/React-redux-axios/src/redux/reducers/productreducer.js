import { ActionTypes } from "../constants/actiontypes";
const intialstate = {
  products: [],
};

export const productsReducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const paymentReducer = (state = intialstate, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.CREATE_NEW_PAYMENT:
      return { ...state, payment: payload };
    default:
      return state;
  }
};
