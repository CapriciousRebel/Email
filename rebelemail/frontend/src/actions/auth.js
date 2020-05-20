import axios from 'axios';
import { getErrors } from './messages';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';


// GET User: (Send token stored in local storage) <-> (get user)
export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({
        type: USER_LOADING
    });


    axios
        .get('api/auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
            dispatch(getErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: AUTH_ERROR
            });
        });
}


// LOGIN User: (Send (username, password) => get (user, token))
export const login = (username, password) => (dispatch) => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({
        username,
        password
    });

    axios
        .post('api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(getErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: LOGIN_FAIL
            });
        });
}


// Logout user (invalidate the token)
export const logout = () => (dispatch, getState) => {
    axios
        .post('api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
            dispatch(getErrors(
                err.response.data,
                err.response.status
            ));
        });
}



////////////////
// Register User: (Send (username, email, password, password2) => get (user, token))
export const register = ({ username, email, password }) => (dispatch) => {

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({
        username,
        email,
        password
    });

    axios
        .post('api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
            dispatch(getErrors(
                err.response.data,
                err.response.status
            ));
            dispatch({
                type: REGISTER_FAIL
            });
        });
}



// Helper function to get the token config from the state
export const tokenConfig = (getState) => {
    // Get token from the state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // If token exists, then send it in headers
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
}