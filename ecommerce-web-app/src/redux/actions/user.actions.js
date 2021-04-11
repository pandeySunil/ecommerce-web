import userTypes from "../types/user.types";

export const signInSuccess = (user) => {
  const token = user ? user.token : null;
  SetToken(token);
  return {
    type: userTypes.SET_CURRENT_USER,
    payload: {
      isLoggedIn: true,
      ...user,
    },
  };
};

export const SetToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

export const CheckLoggedInUser = () => {
  const loggedInUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  return {
    type: "CHECK_LOGGED_IN_USER",
    payload: { IsLoggedIn: true, user: loggedInUserInfo },
  };
};

export const setUserSessionActive = (currentUser) => {
  return {
    type: userTypes.SET_CURRENT_USER_ACTIVE,
    payload: currentUser,
  };
};

export const logOutUser = () => {
  return {
    type: userTypes.LOGOUT_USER_END,
  };
};

export const checkUserSession = () => {
  return {
    type: userTypes.CHECK_USER_SESSION,
  };
};

export const setUserSessionInActive = (currentUser) => {
  return {
    type: userTypes.SET_CURRENT_USER_INACTIVE,
    payload: { IsLoggedIn: false, user: currentUser },
  };
};
export const signInUserStart = ({ userName, password }) => {
  return {
    type: userTypes.SIGN_IN_USER_START,
    payload: {
      userName,
      password,
    },
  };
};

export const logoutUser = () => {
  return { type: userTypes.LOGOUT_USER_START };
};

export const registerUser = (user) => {
  return { type: userTypes.REGISTER_USER_START, payload: user };
};

export const registerUserSuccess = () => {
  return { type: userTypes.REGISTER_USER_SUCCESS };
};

export const registerUserFail = () => {
  return { type: userTypes.REGISTER_USER_FAIL };
};
