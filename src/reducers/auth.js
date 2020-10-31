import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    auth: false,
    name: "",
    picture: ""
}

export default function(state = initialState, action){
    switch (action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: action.payload.isAuthenticated,
                auth: action.payload.auth,
                name: action.payload.name,
                picture: action.payload.picture
            }
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated: false,
                auth: false,
                name: null,
                picture: null
            }
        default:
            return state;
    }
}