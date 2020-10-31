import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from "./types";

//const origin = window.location.origin;

export const login = (res) => {
    console.log(res.accessToken)
    return {
        type: LOGIN_SUCCESS,
        payload: {
            auth: true,
            name: res.name,
            picture: res.picture.data.url,
            token: res.accessToken
        }
    }
}