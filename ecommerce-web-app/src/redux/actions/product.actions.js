import productTypes from "../types/product.type";

export const addProductStart = (productData) => {
  return {
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData,
  };
};

const INTIAL_STATE = {
  product: [],
};

export const setProducts = (productData) => {
  return {
    type: productTypes.FETCH_PRODUCTS_END,
    payload: productData,
  };
};

export const fetchProductStart = () => {
  return {
    type: productTypes.FETCH_PRODUCTS_START,
  };
};

export const deleteProductStart = (id) => {
  return {
    type: productTypes.DELETE_PRODUCT_START,
    payload: { id: id },
  };
};

export const fetchProductsWithFilter = (filter) => {
  return {
    type: productTypes.FETCH_PRODUCTS_WITH_FILTER_START,
    payload: filter,
  };
};

export const fetchProductsDetails = (productId) => {
  return {
    type: productTypes.FETCH_PRODUCTS_DETAILS_START,
    payload: productId,
  };
};

export const setProductDetails = (productDetails) => {
  return {
    type: productTypes.SET_PRODUCT_DETAILS,
    payload: productDetails,
  };
};
