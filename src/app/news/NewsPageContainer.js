// @flow

import React, {Component} from "react";
import NewsPage from "./NewsPage";
import type {News} from "../state/news";
import connect from "react-redux/es/connect/connect";
import lifecycle from 'react-pure-lifecycle';
import {fetchNewsData} from "../state/news";


type Props = News

const NewsPageContainer = (newsData: Props) =>
    (
        <NewsPage newsData={newsData}/>
    );


const componentDidMount = (props) => {
    props.loadNews();
};

const mapStateToProps = (state) => {
    let newsData = state.newsData;
    return {isLoading: newsData.isLoading, hasError: newsData.hasError, items: newsData.items}
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadNews: () => {
            dispatch(fetchNewsData());
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle({componentDidMount})(NewsPageContainer));