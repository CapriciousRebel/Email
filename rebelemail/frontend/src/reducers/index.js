import { combineReducers } from 'redux';
import emails from './emails';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    emails,
    errors,
    messages,
});