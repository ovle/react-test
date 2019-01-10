// @flow

import React from "react";
import type {NewsItem} from "../state/model/news";


type Props = NewsItem;

const NewsRow = ({title, text}: Props) => (
    <li>
        <div>{title}</div>
        <div>{text}</div>
    </li>
);

export default NewsRow;