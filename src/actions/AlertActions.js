import { SET_ALERT, REMOVE_ALERT } from '../actions/ActionTypes';

export const setAlert = (msg) => dispatch => {
    // const id = uuidv4();
    dispatch({
        type: SET_ALERT,
        payload: msg
    });

    setTimeout(() => dispatch({
        type: REMOVE_ALERT
    }), 3000);
};
export const removeAlert = () => dispatch => {
    // const id = uuidv4();
    dispatch({
        type: REMOVE_ALERT
    });

    // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3);
};