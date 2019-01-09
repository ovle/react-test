// @flow

import React from "react";
import NewsRow from "./NewsRow";
import type {NewsItem} from "../state/news";


type Props = {
    news: Array<NewsItem>
};

const NewsPage = ({news}: Props) => (
    <div>
        <div>news</div>
        <ul>
        {
            news.map((item, index) => (
                <NewsRow key={index} {...item}/>
            ))
        }
        </ul>
    </div>
);

export default NewsPage;