import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "./utils/constants";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunk from 'redux-thunk';
import isLoggedInReducer from "./app/state/reducers/isLoggedInReducer";
import {createBrowserHistory} from "history";
import newsReducer from "./app/state/reducers/newsReducer";
import profileReducer from "./app/state/reducers/profileReducer";


export const history = createBrowserHistory();

const appReducers = combineReducers({
    router: connectRouter(history),
    isLoggedIn: isLoggedInReducer,
    newsData: newsReducer,
    profileData: profileReducer
});


export const store = createStore(
    appReducers,
    {},
    compose(
        applyMiddleware(
            routerMiddleware(history),
            thunk
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