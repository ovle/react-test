import {
    PROFILE_LOADING, PROFILE_LOADING_ERROR, PROFILE_LOADING_SUCCESS
} from "../actions/actions";


const profileReducer = (state = { isLoading: false, hasError: false, profile: null }, action) => {
    switch (action.type) {
        case PROFILE_LOADING: return { isLoading: action.isLoading, hasError: false, profile: null };
        case PROFILE_LOADING_SUCCESS: return { isLoading: false, hasError: false, profile: action.profile };
        case PROFILE_LOADING_ERROR: return { isLoading: false, hasError: action.hasError, profile: null };
        default: return state
    }
};

export default profileReducer