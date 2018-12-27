import React, {Component} from "react";
import NewsComponent from "./NewsComponent";


const newsData = [
    { title: "Новость 1", content: "вот" },
    { title: "Новость 2", content: "рарипааотаовтвоащал алалал влвлышл влащащ вшвшвщшащ аащщаашащшвш авлшашаоовашща" },
    { title: "Новость 3", content: "Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false." }
];


class NewsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: newsData
        };
    }

    render() {
        return (
            <NewsComponent news={this.state.news} />
        );
    }
}

export default NewsPage;