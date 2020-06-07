import { combineReducers } from 'redux';
import { AuthReducer as auth } from './AuthReducer';
import { AlertReducer as alert } from './AlertReducer';



export default combineReducers({
    alert,
    auth
});