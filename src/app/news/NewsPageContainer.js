// @flow

import React from "react";
import NewsPage from "./NewsPage";
import type {NewsData} from "../state/model/news";
import connect from "react-redux/es/connect/connect";
import lifecycle from 'react-pure-lifecycle';
import {fetchNewsData} from "../state/model/news";


type Props = NewsData

const NewsPageContainer = (newsData: Props) =>
    (
        <NewsPage newsData={newsData}/>
    );


const componentDidMount = (props) => {
    props.loadData();
};

const mapStateToProps = (state) => {
    let newsData = state.newsData;
    return {isLoading: newsData.isLoading, hasError: newsData.hasError, items: newsData.items}
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => {
            dispatch(fetchNewsData());
        }
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(lifecycle({componentDidMount})(NewsPageContainer));