import {
    NEWS_LOADING,
    NEWS_LOADING_SUCCESS,
    NEWS_LOADING_ERROR
} from "../actions/actions";


const newsReducer = (state = { isLoading: false, hasError: false, items: [] }, action) => {
    switch (action.type) {
        case NEWS_LOADING: return { isLoading: action.isLoading, hasError: false, items: [] };
        case NEWS_LOADING_SUCCESS: return { isLoading: false, hasError: false, items: action.items };
        case NEWS_LOADING_ERROR: return { isLoading: false, hasError: action.hasError, items: [] };
        default: return state
    }
};

export default newsReducer