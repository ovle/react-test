import ls from "local-storage";
import {USER_AUTHORIZED_KEY} from "./utils/constants";
import {createStore} from "redux";
import appReducers from "./app/state/reducers";

const initialState = {
    isLoggedIn: ls.get(USER_AUTHORIZED_KEY)
};
export const store = createStore(appReducers, initialState);

const unsubscribe = store.subscribe(() => {
    //todo how to filter action here?
    ls.set(USER_AUTHORIZED_KEY, store.isLoggedIn)
});
unsubscribe();