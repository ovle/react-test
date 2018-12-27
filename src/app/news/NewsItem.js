import React from "react";

const NewsItem = ({title, content}) => (
    <li>
        <div>{title}</div>
        <div>{content}</div>
    </li>
);

export default NewsItem;