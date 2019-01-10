// @flow

import React from "react";
import NewsRow from "./NewsRow";
import type {NewsData} from "../state/model/news";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";


type Props =  { newsData: NewsData }


const NewsPage = ({newsData}: Props) => (
    <div>
        <div>News:</div>
        {
            newsData.isLoading ? <CircularProgress/> :
                <ul>
                    {
                        newsData.items.map((item, index) => (
                            <NewsRow key={index} {...item}/>
                        ))
                    }
                </ul>
        }
    </div>
);

export default NewsPage;