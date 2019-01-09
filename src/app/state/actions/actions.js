// @flow

import type {NewsItem} from "../news";

export const USER_LOG_IN = 'USER_LOG_IN';
export const USER_LOG_OUT = 'USER_LOG_OUT';

export const NEWS_LOADING = 'NEWS_LOADING';
export const NEWS_LOADING_SUCCESS = 'NEWS_LOADING_SUCCESS';
export const NEWS_LOADING_ERROR = 'NEWS_LOADING_ERROR';


export const userLogIn = () => ({
    type: USER_LOG_IN,
    text: 'Пользователь вошёл в Систему'
});

export const userLogOut = () => ({
    type: USER_LOG_OUT,
    text: 'Пользователь вышел из Системы'
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