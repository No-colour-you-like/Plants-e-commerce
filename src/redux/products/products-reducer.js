import {
  PRODUCTS_STATE
} from "../data/data";

const productsReducer = (state = PRODUCTS_STATE, action) => {
  return {
    ...state
  };
};

export default productsReducer;