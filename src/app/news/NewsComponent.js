import React from "react";
import NewsItem from "./NewsItem";

const NewsComponent = ({news}) => (
    <div>
    <div>news</div>
        <ul>
        {
            news.map((item, index) => (
                <NewsItem key={index} {...item}/>
            ))
        }
        </ul>
    </div>
);

export default NewsComponent;