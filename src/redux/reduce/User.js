import { LOGIN, LOGOUT, SIGNUP } from "../ActionTypes";


let initialState = {
  userData: {},
  isLogin: false,
};

export const User = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return {
        ...state,
        userData: payload,
        isLogin: true,
      };

    case LOGIN:
      return {
        ...state,
        userData: payload,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        userData: {},
        isLogin: false,
      };

    default:
      return state;
  }
};