import Product from "../../components/Product";
import productTypes from "../types/product.type";
const INITIAL_STATE = {
  products: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.FETCH_PRODUCTS_END:
      return {
        ...state,
        products: action.payload,
      };

    case productTypes.SET_PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
