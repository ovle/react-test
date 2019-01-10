// @flow

import type {NewsItem} from "../model/news";
import type {UserProfile} from "../model/profile";

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export const NEWS_LOADING = 'NEWS_LOADING';
export const NEWS_LOADING_SUCCESS = 'NEWS_LOADING_SUCCESS';
export const NEWS_LOADING_ERROR = 'NEWS_LOADING_ERROR';

export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_LOADING_SUCCESS = 'PROFILE_LOADING_SUCCESS';
export const PROFILE_LOADING_ERROR = 'PROFILE_LOADING_ERROR';


export const userLogIn = () => ({
    type: USER_LOG_IN
});

export const userLogOut = () => ({
    type: USER_LOG_OUT
});

export const loadNews = (isLoading: boolean) => ({
    type: NEWS_LOADING,
    isLoading: isLoading
});

export const loadNewsSuccess = (items: Array<NewsItem>) => ({
    type: NEWS_LOADING_SUCCESS,
    items: items
});

export const loadNewsError = (hasError: boolean) => ({
    type: NEWS_LOADING_ERROR,
    hasError: hasError
});

export const loadProfile = (isLoading: boolean) => ({
    type: PROFILE_LOADING,
    isLoading: isLoading
});

export const loadProfileSuccess = (profile: UserProfile) => ({
    type: PROFILE_LOADING_SUCCESS,
    profile: profile
});

export const loadProfileError = (hasError: boolean) => ({
    type: PROFILE_LOADING_ERROR,
    hasError: hasError
});