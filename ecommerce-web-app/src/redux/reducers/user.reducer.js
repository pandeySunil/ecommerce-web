import { Switch } from "react-router";
import userTypes from "../types/user.types";

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        ...action.payload,
      };

    case userTypes.SET_CURRENT_USER_ACTIVE:
      return {
        ...state,
        isLoggedIn: true,
        ...action.payload,
      };

    case userTypes.SET_CURRENT_USER_INACTIVE:
      return {
        ...state,
        isLoggedIn: false,
        ...action.payload,
      };
    case userTypes.LOGOUT_USER_END:
      return {
        ...state,
        isLoggedIn: false,
      };

    case userTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegisterSucessFull: true,
      };
    case userTypes.REGISTER_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        isRegisterSucessFull: false,
      };
    default:
      return state;
  }
};

// const SetAuthInfoData=({payload})=>{

//     if(payload && payload.IsLoggedIn){

//     }
//     return{
//         payload
//     }
// }

export default userReducer;
