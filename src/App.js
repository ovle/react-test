import React from 'react';
import './App.css';

import {Redirect, Route, Router} from 'react-router';
import {Provider} from "react-redux";
import {createBrowserHistory} from 'history';

import HomePage from "./app/home/HomePage";
import NewsPage from "./app/news/NewsPage";
import ProfilePage from "./app/profile/ProfilePage";
import LoginPage from "./app/login/LoginPage";
import Header from "./app/Header";


const App = ({ store }) => {

    const userAuthorized = () => store.getState().isLoggedIn;

    return (
        <div className="App">
            <Provider store={store}>
                <Router history={createBrowserHistory()}>
                    <div>
                        <Header/>

                        <Route path="/home" component={HomePage}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/profile" render={() => (
                            userAuthorized() ? <ProfilePage/> : <Redirect to="/login"/>
                        )}/>
                        <Route path="/login" render={() => (
                            userAuthorized() ? <Redirect to="/profile"/> : <LoginPage/>
                        )}/>
                    </div>
                </Router>
            </Provider>
        </div>
    )
};

export default App;
