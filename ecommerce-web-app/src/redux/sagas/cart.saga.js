import { takeLatest, put, all, call } from "redux-saga/effects";
import cartTypes from "../types/cart.types";
import { setItemsToCart,removeProductEnd,decreaseProductQuantityEnd } from "../actions/cart.actions";

export function* onAddTocart({ payload }) {
  yield put(setItemsToCart(payload));
}

export function* onProductRemove({ payload }) {
  yield put(removeProductEnd(payload));
}

export function* onProductDecrement({ payload }) {
  yield put(decreaseProductQuantityEnd(payload));
}

export function* onAddToCartStart() {
  yield takeLatest(cartTypes.ADD_TO_CART_START, onAddTocart);
}

export function* onProductRemoveStart() {
  yield takeLatest(cartTypes.REMOVE_CART_ITEM_START, onProductRemove);
}

export function* onProductDecrementStart() {
  yield takeLatest(cartTypes.DECREMENT_PRODUCT_QUANTITY_START, onProductDecrement);
}


export default function* cartSagas() {
  yield all([call(onAddToCartStart),
    call(onProductRemoveStart),
    call(onProductDecrementStart)]);
}
