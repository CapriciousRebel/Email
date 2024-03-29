import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOGIN_SUCCESS,
    LOGIN_FAIL,

    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,

    LOGOUT_SUCCESS
} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function (state = initialState, action) {

    switch (action.type) {

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            };

        case USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };

        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };

        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };

        default:
            return state;
    }
}