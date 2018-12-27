import {USER_LOG_IN, USER_LOG_OUT} from "../actions/actions";


const isLoggedInReducer = (state = null, action) => {
    console.log(`isLoggedInReducer: ${action.type}, `, state);

    switch (action.type) {
        case USER_LOG_IN: return true;
        case USER_LOG_OUT: return false;
        default: return state
    }
};

export default isLoggedInReducer