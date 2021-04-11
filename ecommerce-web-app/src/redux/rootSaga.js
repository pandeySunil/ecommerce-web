import { all, call } from "redux-saga/effects";
import poductSagas from "../redux/sagas/product.saga";
import userSagas from "../redux/sagas/user.saga";
import cartSagas from "../redux/sagas/cart.saga";

export default function* () {
  yield all([call(poductSagas), call(userSagas), call(cartSagas)]);
}
