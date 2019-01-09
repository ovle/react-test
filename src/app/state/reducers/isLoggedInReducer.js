import {USER_LOG_IN, USER_LOG_OUT} from "../actions/actions";
import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "../../../utils/constants";


const isLoggedInReducer = (state = ls.get(USER_AUTHORIZED_KEY) || false, action) => {
    switch (action.type) {
        case USER_LOG_IN: return true;
        case USER_LOG_OUT: return false;
        default: return state
    }
};

export default isLoggedInReducer