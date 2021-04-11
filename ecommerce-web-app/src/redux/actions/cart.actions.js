import Product from "../../components/Product";
import cartTypes from "../types/cart.types";

export const addItemsToCartStart = (product) => {
  return {
    type: cartTypes.ADD_TO_CART_START,
    payload: product,
  };
};

export const setItemsToCart = (product) => {
  return {
    type: cartTypes.SET_CART_ITEMS,
    payload: product,
  };
};

export const removeProductStart=product=>{
  return {
    type:cartTypes.REMOVE_CART_ITEM_START,
    payload:product
  }
}

export const removeProductEnd=product=>{
  return {
    type:cartTypes.REMOVE_CART_ITEM_END,
    payload:product
  }
}

export const decreaseProductQuantityStart=product=>{
  return {
    type:cartTypes.DECREMENT_PRODUCT_QUANTITY_START,
    payload:product
  }
}

export const decreaseProductQuantityEnd=product=>{
  return {
    type:cartTypes.DECREMENT_PRODUCT_QUANTITY_END,
    payload:product
  }
}