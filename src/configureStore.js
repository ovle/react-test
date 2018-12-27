import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "./utils/constants";
import {createStore} from "redux";
import appReducers from "./app/state/reducers";

const initialState = {
    isLoggedIn: ls.get(USER_AUTHORIZED_KEY) || false,
    test: 42
};

export const store = createStore(appReducers, initialState
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const unsubscribe = store.subscribe(() => {
    //todo how to filter action here?
    let loggedIn = store.getState().isLoggedIn;
    console.log("event, store.isLoggedIn=" + loggedIn);

    ls.set(USER_AUTHORIZED_KEY, loggedIn);
});
// unsubscribe();