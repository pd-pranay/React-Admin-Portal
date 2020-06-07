import axios from 'axios';
import { setAlert } from './AlertActions';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from './ActionTypes';

// Load User
export const loadUser = () => async dispatch => {
    // try {
    //   const res = await axios.get('/api/auth');
    if (localStorage.token) {
        dispatch({
            type: USER_LOADED,
            payload: {
                user: { name: 'pranay', role: 'admin' }
            }
        });
        localStorage.setItem('token', 'tokenset');
    }

    // } catch (err) {
    //   dispatch({
    //     type: AUTH_ERROR
    //   });
    // }
};

// Login User
export const login = (email, password) => async dispatch => {
    console.log('login func called');

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ email, password });

    try {
        // const res = await axios.post('/api/auth', body, config);
        localStorage.setItem('token', 'tokenset');
        dispatch({
            type: LOGIN_SUCCESS,
            //res.data
            payload: {
                user: { name: 'pranay', role: 'admin' }
            }
        });
        dispatch(setAlert('Login Successfull'));

        // dispatch(loadUser());
    } catch (err) {
        // const errors = err.response.data.errors;

        // if (errors) {
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        // }
        dispatch(setAlert('Not Successfull'));
        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
    // dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOGOUT });
};