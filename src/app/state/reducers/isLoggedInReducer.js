import {USER_LOG_IN, USER_LOG_OUT} from "../actions/actions";


const isLoggedInReducer = (state = null, action) => {
    console.log(`isLoggedInReducer: ${action}`);
    
    switch (action.type) {
        case USER_LOG_IN: return { isLoggedIn: true };
        case USER_LOG_OUT: return { isLoggedIn: false };
        default: return state
    }
};

export default isLoggedInReducer