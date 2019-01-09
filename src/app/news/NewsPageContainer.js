// @flow

import React, {Component} from "react";
import NewsPage from "./NewsPage";
import type {NewsItem} from "../state/news";
import {newsData} from "../state/news";


type Props = {}

type State = {
    news: Array<NewsItem>
}


class NewsPageContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            news: newsData
        };
    }

    render() {
        return (
            <NewsPage news={this.state.news} />
        );
    }
}

export default NewsPageContainer;