import axios from 'axios';
import { createMessage, getErrors } from './messages';
import { GET_EMAILS, DELETE_EMAIL, ADD_EMAIL, GET_ERRORS } from './types';

// ADD EMAIL   
export const addEmail = (email) => dispatch => {
    axios
        .post("api/email/", email)
        .then(res => {
            dispatch(createMessage({
                emailAdded: "Email was Added!",
            }));
            dispatch({
                type: ADD_EMAIL,
                payload: res.data
            });
        }).catch(err => dispatch(getErrors(
            err.response.data,
            err.response.status
        )));
}


// GET EMAILS
export const getEmails = () => dispatch => {
    axios
        .get('api/email')
        .then(res => {
            dispatch({
                type: GET_EMAILS,
                payload: res.data
            });
        }).catch(err => dispatch(getErrors(
            err.response.data,
            err.response.status
        )));
}

// DELETE EMAIL
export const deleteEmail = (id) => dispatch => {
    axios
        .delete(`api/email/${id}/`)
        .then(res => {
            dispatch(createMessage({
                emailDeleted: "Email was deleted!",
            }));
            dispatch({
                type: DELETE_EMAIL,
                payload: id
            });
        }).catch(err => console.log(err));
}
