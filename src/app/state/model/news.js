// @flow

import {fetchData} from "../../../utils/api";
import {loadNews, loadNewsError, loadNewsSuccess} from "../actions/actions";


export type NewsItem = {
    id: number,
    title: string,
    text?: string
}

export type NewsData = {
    isLoading: boolean,
    hasError: boolean,
    items: Array<NewsItem>
}


export const fetchNewsData = () =>
    (dispatch: (any) => void) => {
        dispatch(loadNews(true));

        return fetchData(
            "https://mysterious-reef-29460.herokuapp.com/api/v1/news",
            () => dispatch(loadNews(false)),
            (response) => dispatch(loadNewsSuccess(response.data)),
            () => dispatch(loadNewsError(true))
        )
    };