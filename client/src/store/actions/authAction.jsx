import {
  url,
  SETTING_AUTH,
  SET_AUTH_LOGIN_SUCCESS,
  SET_AUTH_REGISTER_SUCCESS,
  SET_AUTH_FAIL,
  LOCALSTORAGE_TOKEN_NAME,
} from "../constants";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

export const login = (userForm) => async (dispatch) => {
  try {
    dispatch({
      type: SETTING_AUTH,
    });
    const response = await axios.post(`${url}/auth/login`, userForm);
    if (response.data.success) {
      localStorage.setItem(LOCALSTORAGE_TOKEN_NAME, response.data.accessToken);
      if (localStorage[LOCALSTORAGE_TOKEN_NAME]) {
        setAuthToken(LOCALSTORAGE_TOKEN_NAME);
        dispatch({
          type: SET_AUTH_LOGIN_SUCCESS,
          payload: response.data,
        });
      }
      return response.data;
    }
  } catch (error) {
    dispatch({
      type: SET_AUTH_FAIL,
      payload: error.response.data
        ? error.response.data
        : "Internal server error",
    });
  }
};

export const register = (userForm) => async (dispatch) => {
  try {
    dispatch({
      type: SETTING_AUTH,
    });
    const response = await axios.post(`${url}/auth/register`, userForm);
    if (response.data.success) {
      dispatch({
        type: SET_AUTH_REGISTER_SUCCESS,
        payload: response.data,
      });
      return response.data;
    }
  } catch (error) {
    dispatch({
      type: SET_AUTH_FAIL,
      payload: error.response.data
        ? error.response.data
        : "Internal server error",
    });
  }
};
