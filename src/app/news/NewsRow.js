// @flow

import React from "react";
import type {NewsItem} from "../state/news";


type Props = NewsItem;

const NewsRow = ({title, content}: Props) => (
    <li>
        <div>{title}</div>
        <div>{content}</div>
    </li>
);

export default NewsRow;