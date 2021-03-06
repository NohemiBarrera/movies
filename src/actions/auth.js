import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./types";

export const login = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      auth: true,
      name: res.name,
      picture: res.picture.data.url,
      token: res.accessToken,
      isAuthenticated: true,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
    payload: {
      auth: false,
      token: null,
      isAuthenticated: false,
      name: null,
      picture: null,
    },
  };
};
