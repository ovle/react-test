import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "./utils/constants";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import isLoggedInReducer from "./app/state/reducers/isLoggedInReducer";
import {createBrowserHistory} from "history";


export const history = createBrowserHistory();

const appReducers = combineReducers({
    router: connectRouter(history),
    isLoggedIn: isLoggedInReducer
});

const initialState = {
    isLoggedIn: ls.get(USER_AUTHORIZED_KEY) || false
};

export const store = createStore(
    appReducers,
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


const unsubscribe = store.subscribe(() => {
    //todo how to filter action here?
    let loggedIn = store.getState().isLoggedIn;
    ls.set(USER_AUTHORIZED_KEY, loggedIn);
});
// unsubscribe();