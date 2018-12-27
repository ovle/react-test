import { combineReducers } from 'redux'
import isLoggedInReducer from "./isLoggedInReducer";
import testReducer from "./test";

const appReducers = combineReducers({
    isLoggedIn: isLoggedInReducer,
    test: testReducer
});

export default appReducers