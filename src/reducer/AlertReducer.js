import { SET_ALERT, REMOVE_ALERT } from '../actions/ActionTypes';

const initialState = {
    msg: '',
    open: false
};

export const AlertReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log("Alert state ", payload);
    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                msg: payload,
                open: true
            };
        case REMOVE_ALERT:
            return {
                ...state,
                open: false,
                msg: ''
            }
        default:
            return state;
    }
}