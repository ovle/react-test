import { combineReducers } from 'redux'
import isLoggedInReducer from "./isLoggedInReducer";

const appReducers = combineReducers({
    isLoggedIn: isLoggedInReducer
});

export default appReducers