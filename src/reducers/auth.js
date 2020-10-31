import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from "../actions/types";

import login from "../actions/auth";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false
}

export default function(state = initialState, action){
    switch (action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                auth: action.payload.auth,
                name: action.payload.name,
                picture: action.payload.picture
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}