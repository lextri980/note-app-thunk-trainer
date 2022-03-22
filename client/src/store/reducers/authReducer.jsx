import {
  SETTING_AUTH,
  SET_AUTH_LOGIN_SUCCESS,
  SET_AUTH_REGISTER_SUCCESS,
  SET_AUTH_FAIL,
} from "../constants";

const initState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  success: false,
};

function authReducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case SETTING_AUTH:
      return {
        loading: true,
      };

    case SET_AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: payload.user,
        message: payload.message,
        success: true,
      };

    case SET_AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: payload.message,
        success: true,
      };

    case SET_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        message: payload.message,
        success: false,
      };

    default:
      return state;
  }
}

export default authReducer;
