import axios from 'axios';
import { GET_EMAILS, DELETE_EMAIL, ADD_EMAIL } from './types';

// GET EMAILS
export const getEmails = () => dispatch => {
    axios
        .get('api/email')
        .then(res => {
            dispatch({
                type: GET_EMAILS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}

// DELETE EMAIL
export const deleteEmail = (id) => dispatch => {
    axios
        .delete(`api/email/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_EMAIL,
                payload: id
            });
        }).catch(err => console.log(err));
}

// ADD EMAIL   
export const addEmail = (email) => dispatch => {
    axios
        .post("api/email/", email)
        .then(res => {
            dispatch({
                type: ADD_EMAIL,
                payload: res.data
            });
        }).catch(err => console.log(err));
}