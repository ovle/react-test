// @flow

import {fetchData} from "../../utils/api";
import {loadNews, loadNewsError, loadNewsSuccess} from "./actions/actions";


export type NewsItem = {
    id: number,
    title: string,
    text?: string
}

export type News = {
    isLoading: boolean,
    hasError: boolean,
    items: Array<NewsItem>
}


export const fetchNewsData = () =>
    (dispatch) => {
        dispatch(loadNews(true));

        return fetchData(
            "https://mysterious-reef-29460.herokuapp.com/api/v1/news",
            () => {
                dispatch(loadNews(false))
            },
            (newsData) => {
                dispatch(loadNewsSuccess(newsData.data))
            },
            () => {
                dispatch(loadNewsError(true))
            }
        )
    };