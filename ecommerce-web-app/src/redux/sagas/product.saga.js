import { takeLatest, put, all, call } from "redux-saga/effects";
import productTypes from "../types/product.type";
import { setProducts, setProductDetails } from "../actions/product.actions";
import * as apiService from "../../Services/ApiService";

export function* addProduct({
  payload: { id, title, category, imgUrl, price },
}) {
  apiService.addProduct({ id, title, category, imgUrl, price });
}

export function* fetchProductDetails({ payload }) {
  const productDetails = yield apiService.fetchProductDetail(payload);
  yield put(setProductDetails(productDetails));
}
export function* deletProduct({ payload: { id } }) {
  apiService.deleteProduct(id);
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCT_START, deletProduct);
}

export default function* poductSagas() {
  yield all([
    call(onAddProductStart),
    call(onProductFetchStart),
    call(onDeleteProductStart),
    call(onFetchProductsWithFilterStart),
    call(onFetchProductDetailsStart),
  ]);
}

export function* fetchProductsWithFilter({ payload }) {
  const productsData = yield apiService.fetchProductWithFilter(payload);

  yield put(setProducts(productsData));
}

export function* fetchProducts() {
  const productData = yield apiService.getAllProducts();
  yield put(setProducts(productData));
}

export function* onProductFetchStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onFetchProductsWithFilterStart() {
  yield takeLatest(
    productTypes.FETCH_PRODUCTS_WITH_FILTER_START,
    fetchProductsWithFilter
  );
}

export function* onFetchProductDetailsStart() {
  yield takeLatest(
    productTypes.FETCH_PRODUCTS_DETAILS_START,
    fetchProductDetails
  );
}
