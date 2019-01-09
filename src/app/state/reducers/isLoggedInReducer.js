import {USER_LOG_IN, USER_LOG_OUT} from "../actions/actions";
import type {UserAction} from "../actions/actions";


const isLoggedInReducer = (state = null, action: UserAction) => {
    switch (action.type) {
        case USER_LOG_IN: return true;
        case USER_LOG_OUT: return false;
        default: return state
    }
};

export default isLoggedInReducer