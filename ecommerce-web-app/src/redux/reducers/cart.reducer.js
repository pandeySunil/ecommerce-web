import cartTypes from "../types/cart.types";

const INTIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: setItems(state, action.payload),
      };
      case cartTypes.REMOVE_CART_ITEM_END :
        return {
          ...state,
          cartItems:removeCartItem(state,action.payload)
        }
        case cartTypes.DECREMENT_PRODUCT_QUANTITY_END :
          return {
            ...state,
            cartItems:decrementProductQuantity(state,action.payload)
          }
    default:
      return {
        ...state,
      };
  }
};

export const isProductExistInCart = (productFromCart, product) => {
  return productFromCart.id == product?.id;
};

export const setItems = (state, product) => {
  // console.log("SetIUtems")
  const cartItems = state?.cartItems;
  const resultArray = [...cartItems];
  if (cartItems && Array.isArray(cartItems) && cartItems.length > 0) {
    cartItems.forEach((p) => {
      console.log("IndReduce", p);
      if (isProductExistInCart(p, product)) {
        const qty = p.quantity;
        p.quantity = qty + 1;
        //resultArray.push(p);
      } else {
        // resultArray.push(p);
        //   resultArray.push(product)
      }
    });
    const isProductEx = resultArray.find((s) => s.id == product.id);
    if (isProductEx) {
      return resultArray;
    } else {
      resultArray.push(product);
      return resultArray;
    }
  }
  resultArray.push(product);
  return resultArray;
};

const removeCartItem = ({cartItems},product)=>{

  return Array.isArray(cartItems) ? cartItems.filter((ci)=>{
    return ci.id != product?.id;
  }):[]
}

const decrementProductQuantity = ({cartItems},product) => {

  const resultArray =  Array.isArray(cartItems) ? cartItems.map((ci)=>{
    if(isProductExistInCart(ci,product) && ci.quantity > 1){
       ci.quantity = ci.quantity-1;
       return ci;
    }
    return ci;
  }):[]
  return resultArray;
}


export default cartReducer;
