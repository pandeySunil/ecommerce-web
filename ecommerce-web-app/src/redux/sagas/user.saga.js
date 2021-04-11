import userTypes from "../types/user.types";
import {
  signInSuccess,
  setUserSessionActive,
  setUserSessionInActive,
  logOutUser,
  registerUserSuccess,
  registerUserFail,
} from "../actions/user.actions";
import { takeLatest, put, all, call } from "redux-saga/effects";
import * as apiService from "../../Services/ApiService";

export function* onUserLoginStart() {
  yield takeLatest(userTypes.SIGN_IN_USER_START, loginUser);
}

export function* loginUser({ payload: { userName, password } }) {
  const user = yield apiService.loginUser({ userName, password });
  yield put(signInSuccess(user));
}

export function* checkUserSession() {
  const currentUser = yield apiService.checkUserSession();

  if (currentUser) {
    yield put(setUserSessionActive(currentUser));
  } else {
    yield put(setUserSessionInActive(null));
  }
}

export function* onRegisterUser({ payload }) {
  const registerUserResponse = yield apiService.registerUser(payload);

  if (registerUserSuccess && registerUserResponse.status == 200) {
    yield put(registerUserSuccess());
  } else {
    yield put(registerUserFail());
  }
}

export function* onCheckUserSessionStart() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* onlogOutUser() {
  yield put(logOutUser());
}

export function* onLogOutStart() {
  yield takeLatest(userTypes.LOGOUT_USER_START, logOutUser);
}

export function* onRegisterUserStart() {
  yield takeLatest(userTypes.REGISTER_USER_START, onRegisterUser);
}
export default function* userSagas() {
  yield all([
    call(onRegisterUserStart),
    call(onUserLoginStart),
    call(onCheckUserSessionStart),

    call(onLogOutStart),
  ]);
}
